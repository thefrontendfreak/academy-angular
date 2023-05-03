import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainviewModule } from './mainview/mainview.module';
import { SigninpageComponent } from './user/signinpage/signinpage.component';
import { SignuppageComponent } from './user/signuppage/signuppage.component';
import { MenuToggleService } from './shared/services/menutoggle-services';
import { UserCourseModalComponent } from './shared/modals/user-course-modal/user-course-modal.component';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { CoursesModalComponent } from './dashboard/dashboard-view/dashboard-courses-page/courses-modal/courses-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SigninpageComponent,
    SignuppageComponent,
    UserCourseModalComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    AppRoutingModule,
    ChartsModule,
    MainviewModule,
    
  ],
  providers: [
    MenuToggleService,
    BsModalRef
  ],
  entryComponents:[
    UserCourseModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
