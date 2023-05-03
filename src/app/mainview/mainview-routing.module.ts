import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainviewComponent } from './mainview/mainview.component';
import { HomepageComponent } from './mainview/components/homepage/homepage.component';
import { CoursespageComponent } from './mainview/components/coursespage/coursespage.component';
import { AboutpageComponent } from './mainview/components/aboutpage/aboutpage.component';
import { DonatepageComponent } from './mainview/components/donatepage/donatepage.component';
import { PricingPageComponent } from './mainview/components/pricing-page/pricing-page.component';


const routes: Routes = [
  {
    path : "",
    component : MainviewComponent,
    children :[
      {
        path : "",
        component : HomepageComponent
      },
      {
        path: "courses",
        component: CoursespageComponent
      },
      {
        path: "about",
        component:AboutpageComponent
      },
      {
        path: "donate",
        component: DonatepageComponent
      },
      {
        path:"pricing",
        component:PricingPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainviewRoutingModule { }
