import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-user-course-modal',
  templateUrl: './user-course-modal.component.html',
  styleUrls: ['./user-course-modal.component.scss']
})
export class UserCourseModalComponent implements OnInit {

  courseSelectNextStep : boolean = false;
  el = document.getElementsByClassName('modal-backdrop');

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    
  }

  courseNextStep(){
    this.courseSelectNextStep = true;
  }
  courseBackStep(){
    this.courseSelectNextStep = false;
  }




  hideModal(): void {
    this.bsModalRef.hide();
  }
}
