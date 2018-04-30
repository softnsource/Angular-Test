import { Component, OnInit } from '@angular/core';
import { MessageService } from '../common/service/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 private formType: string ='list';
 msgser:any;
  constructor(private messageService : MessageService) { }

  ngOnInit() {
    //Service to recive message from child
   this.msgser= this.messageService.getMessage().subscribe(data=>{
    if(data.for=='parent'){
      this.formType=data.msg;
    }
   });
  }
  ngOnDestroy() {
    this.msgser.unsubscribe();

  }
  addNew(){   
    this.formType="form";
  }

}
