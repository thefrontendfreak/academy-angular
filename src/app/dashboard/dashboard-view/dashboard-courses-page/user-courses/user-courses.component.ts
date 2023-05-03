import { Component, OnInit , TemplateRef  , ViewChild } from '@angular/core';
import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { UserCourseModalComponent } from 'src/app/shared/modals/user-course-modal/user-course-modal.component';

@Component({
  selector: 'app-user-courses',
  templateUrl: './user-courses.component.html',
  styleUrls: ['./user-courses.component.scss']
})
export class UserCoursesComponent implements OnInit {

  bsModalRef: BsModalRef
 
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openCourseModal(){
    this.bsModalRef = this.modalService.show(UserCourseModalComponent,{ class: 'courseModal' });
  }
  

}
