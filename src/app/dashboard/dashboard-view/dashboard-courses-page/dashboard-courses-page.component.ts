import { Component, OnInit, TemplateRef  , ViewChild } from '@angular/core';
import { BsModalService, BsModalRef , ModalDirective } from 'ngx-bootstrap/modal';
import { UserCourseModalComponent } from 'src/app/shared/modals/user-course-modal/user-course-modal.component';
import { UserBadgesComponent } from './user-badges/user-badges.component';

@Component({
  selector: 'app-dashboard-courses-page',
  templateUrl: './dashboard-courses-page.component.html',
  styleUrls: ['./dashboard-courses-page.component.scss']
})
export class DashboardCoursesPageComponent implements OnInit {
  isModalShown = true;
  showUserCourses : boolean = true;
  showUserProgress : boolean = false;
  showUserProfile : boolean = false;
  showUserTeachers : boolean = false;
  showUserBadges : boolean = false;
  showUserDiscussions : boolean = false;
  

  bsModalRef: BsModalRef
  constructor(private modalService: BsModalService) {
    let currentUrl = window.location.href;

  
    // showing different component in different routes
    if(currentUrl.includes('/dashboard/courses')){
      this.showUserCourses = true;
      this.showUserProgress = false;
      this.showUserProfile = false;
      this.showUserTeachers = false;
      this.showUserBadges = false;
      this.showUserDiscussions = false;
    }else if(currentUrl.includes('/dashboard/progress')){
      this.showUserProgress = true;
      this.showUserCourses = false;
      this.showUserProfile = false;
      this.showUserTeachers = false;
      this.showUserBadges = false;
      this.showUserDiscussions = false;
    }else if(currentUrl.includes('/dashboard/profile')){
      this.showUserCourses = false;
      this.showUserProgress = false;
      this.showUserProfile = true;
      this.showUserTeachers = false;
      this.showUserBadges = false;
      this.showUserDiscussions = false;
    }else if(currentUrl.includes('/dashboard/teachers')){
      this.showUserCourses = false;
      this.showUserProgress = false;
      this.showUserProfile = false;
      this.showUserTeachers = true;
      this.showUserBadges = false;
      this.showUserDiscussions = false;
    }else if(currentUrl.includes('/dashboard/badges')){
      this.showUserCourses = false;
      this.showUserProgress = false;
      this.showUserProfile = false;
      this.showUserTeachers = false;
      this.showUserBadges = true;
      this.showUserDiscussions = false;
    }else if(currentUrl.includes('/dashboard/discussion')){
      this.showUserCourses = false;
      this.showUserProgress = false;
      this.showUserProfile = false;
      this.showUserTeachers = false;
      this.showUserBadges = false;
      this.showUserDiscussions = true;
    }
    else{
      this.showUserCourses = true;
      this.showUserProgress = false;
      this.showUserProfile = false;
      this.showUserTeachers = false;
      this.showUserBadges = false;
    }

  }

  ngOnInit() {
    
  }
  

  openCourseModal() {
    this.bsModalRef = this.modalService.show(UserCourseModalComponent,{ class: 'courseModal' });
  }
}
 
 
  
  
  

