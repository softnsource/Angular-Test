import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../../common/service/home-service.service';
import { TestTable } from '../../common/class/test-table';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
private TestDataList: TestTable[]=[];
  constructor(private homeService: HomeServiceService) { }

  ngOnInit() {
  this.homeService.get().subscribe(data => {
    //Recive data and sorting..
      this.TestDataList = (data || []).sort((a: TestTable, b: TestTable) => a.id < b.id ? -1 : 1);
     });
  }

}
