import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../../common/service/home-service.service';
import { TestTable } from '../../common/class/test-table';
import { MessageService } from '../../common/service/message.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
col1= new FormControl("");
  col2 = new FormControl("");
  col3 = new FormControl("");
  id :number=0;
  form:FormGroup;
  constructor(private fb: FormBuilder,private homeService: HomeServiceService, private messageService : MessageService) { }
  ngOnInit() {
    //initialize form 
    this.form = this.fb.group(
      {
        col1: this.col1,
        col2 : this.col2,
        col3 :this.col3
      });
  }
  onSubmit(){
    //Sending form object to service
    this.form.value;
    var testdata: TestTable = new TestTable();
    testdata.id=this.homeService.TestTableList.length+1;
    testdata.col1 = this.form.value.col1;
    testdata.col2 = this.form.value.col2;
    testdata.col3 = this.form.value.col3;
this.homeService.post(testdata).subscribe(data=>
{
  //send message to parent component
this.messageService.newMessage({for:'parent',msg:'list'});
});
  }
}
