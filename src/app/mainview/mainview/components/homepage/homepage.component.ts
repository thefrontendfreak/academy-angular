import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
	  spaceBetween: 30,
    keyboard: true,
    mousewheel: true,
    speed: 700,
    scrollbar: false,
    preventClicks: false,
    autoplay: false,
    fadeEffect: {
      crossFade: true
    },
    navigation: false,
    pagination: true,  
    breakpoints: {
      1600:{
        slidesPerView: 3,
        spaceBetween : 30,
        pagination: false
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination:false
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: false
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 30,
        pagination:false
      },
    }
  };
  public config2: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
	  spaceBetween: 30,
    keyboard: true,
    mousewheel: true,
    speed: 700,
    scrollbar: false,
    preventClicks: false,
    autoplay: false,
    fadeEffect: {
      crossFade: true
    },
    navigation: false,
    pagination: true,  
    breakpoints: {
      1600:{
        slidesPerView: 3,
        spaceBetween : 30,
        pagination: false
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: false
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: false
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: false
      },
    }
  };
}
