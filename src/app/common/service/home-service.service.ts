import { Injectable } from '@angular/core';
import { TestTable } from '../class/test-table';
import { Observable } from 'rxjs/Observable';
import { toObservable } from '@angular/forms/src/validators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class HomeServiceService {
  public TestTableList: TestTable[] = [];
  private serviceSource = new BehaviorSubject<TestTable[]>(this.TestTableList);
  

  public get(): Observable<TestTable[]> {
    return this.serviceSource.asObservable();
  }
  public post(data: TestTable): Observable<TestTable[]> {
    this.TestTableList.push(data);
    return this.serviceSource.asObservable();

  }
}
