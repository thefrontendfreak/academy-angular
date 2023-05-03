import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { MainviewRoutingModule } from './mainview-routing.module';
import { MainviewComponent } from './mainview/mainview.component';
import { HomepageComponent } from './mainview/components/homepage/homepage.component';
import { CoursespageComponent } from './mainview/components/coursespage/coursespage.component';
import { AboutpageComponent } from './mainview/components/aboutpage/aboutpage.component';
import { DonatepageComponent } from './mainview/components/donatepage/donatepage.component';
import { PricingPageComponent } from './mainview/components/pricing-page/pricing-page.component';



const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
@NgModule({
  declarations: [MainviewComponent, HomepageComponent, CoursespageComponent, AboutpageComponent, DonatepageComponent, PricingPageComponent],
  imports: [
    CommonModule,
    MainviewRoutingModule,
    AccordionModule.forRoot(),
    SwiperModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
})
export class MainviewModule { }
