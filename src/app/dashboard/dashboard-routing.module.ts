import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardCoursesPageComponent } from './dashboard-view/dashboard-courses-page/dashboard-courses-page.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { DashboardProgressPageComponent } from './dashboard-view/dashboard-progress-page/dashboard-progress-page.component';
import { CourseDetailsComponent } from './dashboard-view/course-details/course-details.component';
import { CourseLessonsComponent } from './dashboard-view/course-lessons/course-lessons.component';
import { RecordedClassComponent } from './dashboard-view/recorded-class/recorded-class.component';
import { VideoPlayerComponent } from './dashboard-view/video-player/video-player.component';
import { ChatPageComponent } from './dashboard-view/chat-page/chat-page.component';
import { UserSettingsPageComponent } from './dashboard-view/user-settings-page/user-settings-page.component';
import { UserBadgesComponent } from './dashboard-view/dashboard-courses-page/user-badges/user-badges.component';


const routes: Routes = [
  {
    path : "",
    component : DashboardViewComponent,
    children :[
      {
        path : "courses",
        component : DashboardCoursesPageComponent
      },
      {
        path:"progress",
        component: DashboardCoursesPageComponent
      },
      {
        path:"profile",
        component: DashboardCoursesPageComponent
      },
      {
        path:"teachers",
        component: DashboardCoursesPageComponent
      },
      {
        path:"coursedetails",
        component:CourseDetailsComponent,
      },
      {
        path:"courselessons",
        component:CourseLessonsComponent
      },
      {
        path:"recordedclass",
        component:RecordedClassComponent
      },
      {
        path:"videoplayer",
        component:VideoPlayerComponent
      },
      {
        path:"chat",
        component:ChatPageComponent
      },
      {
        path:"settings",
        component:UserSettingsPageComponent
      },
      {
        path:"badges",
        component:DashboardCoursesPageComponent
      },
      {
        path:"discussions",
        component:DashboardCoursesPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
