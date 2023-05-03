import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-lessons',
  templateUrl: './course-lessons.component.html',
  styleUrls: ['./course-lessons.component.scss']
})
export class CourseLessonsComponent implements OnInit {
  showLessonSidebar : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  //Lesson  Sidebar scrolling function
  scroll(el: HTMLElement) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'});
    
    setTimeout(() => {
      window.scrollBy(0, -100);
    }, 400);
  }

  lessonSidebarHandler(){
    this.showLessonSidebar = !this.showLessonSidebar;
  }

}
