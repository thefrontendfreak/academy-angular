import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  showCourseSidebar : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  //Course Details  Sidebar scrolling function 
  scroll(el: HTMLElement) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'});
    
    setTimeout(() => {
      window.scrollBy(0, -100);
    }, 400);
  }

  courseSidebarHandler(){
    this.showCourseSidebar = !this.showCourseSidebar;
  }
}
