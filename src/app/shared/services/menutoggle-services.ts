
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MenuToggleService {

  private status = new BehaviorSubject(false);
  sharedstatus = this.status.asObservable();

  constructor() { }

  nextstatus(status: boolean) {
    this.status.next(status)
  }
  
}