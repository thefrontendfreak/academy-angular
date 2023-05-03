import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagInputModule } from 'ngx-chips';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GradeModalComponent } from './dashboard-view/dashboard-courses-page/grade-modal/grade-modal.component';
import { CoursesModalComponent } from './dashboard-view/dashboard-courses-page/courses-modal/courses-modal.component';
import { DashboardCoursesPageComponent } from './dashboard-view/dashboard-courses-page/dashboard-courses-page.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CoursesPageSidebarComponent } from './dashboard-view/dashboard-courses-page/courses-page-sidebar/courses-page-sidebar.component';
import { DashboardProgressPageComponent } from './dashboard-view/dashboard-progress-page/dashboard-progress-page.component';
import { UserCoursesComponent } from './dashboard-view/dashboard-courses-page/user-courses/user-courses.component';
import { UserProfileComponent } from './dashboard-view/dashboard-courses-page/user-profile/user-profile.component';
import { ChartsModule } from 'ng2-charts';
import { UserTeachersComponent } from './dashboard-view/dashboard-courses-page/user-teachers/user-teachers.component';
import { CourseDetailsComponent } from './dashboard-view/course-details/course-details.component';
import { CourseLessonsComponent } from './dashboard-view/course-lessons/course-lessons.component';
import { RecordedClassComponent } from './dashboard-view/recorded-class/recorded-class.component';
import { VideoPlayerComponent } from './dashboard-view/video-player/video-player.component';
import { ChatPageComponent } from './dashboard-view/chat-page/chat-page.component';
import { UserSettingsPageComponent } from './dashboard-view/user-settings-page/user-settings-page.component';
import { UserBadgesComponent } from './dashboard-view/dashboard-courses-page/user-badges/user-badges.component';
import { UserDiscussionsComponent } from './dashboard-view/dashboard-courses-page/user-discussions/user-discussions.component';

@NgModule({
  declarations: [DashboardViewComponent, SidebarComponent,DashboardCoursesPageComponent,GradeModalComponent, CoursesModalComponent, CoursesPageSidebarComponent, DashboardProgressPageComponent, UserCoursesComponent, UserProfileComponent, UserTeachersComponent, CourseDetailsComponent, CourseLessonsComponent, RecordedClassComponent, VideoPlayerComponent, ChatPageComponent, UserSettingsPageComponent, UserBadgesComponent, UserDiscussionsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    TagInputModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents:[
    
  ]
})
export class DashboardModule { }
