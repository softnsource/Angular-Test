import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MessageService {

  private messageSource = new BehaviorSubject<any>('default message');

  currentMessage = this.messageSource.asObservable();
  // Observable string streams
  // messageSourceHasNewMessage$ = this.messageSource.asObservable();
  getMessage(): Observable<any> {
    return this.messageSource.asObservable();
  }

  // Service message commands
  newMessage(message: any) {
    this.messageSource.next(message);
  }

}
