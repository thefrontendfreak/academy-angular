import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  showPrivacyBox : boolean = false;
  canvas: any;
  ctx: any;
  showUSerProfile : boolean = true;
  showUserBadges : boolean = false;
  constructor() {
    let currentUrl = window.location.href;

    if(currentUrl.includes('/dashboard/profile')){
      this.showUSerProfile = true;
      this.showUserBadges = false;
    }else if(currentUrl.includes('/dashboard/badges')){
      this.showUSerProfile = false;
      this.showUserBadges = true;
    }
  }

  ngOnInit() {

    //Streak  Chart
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: ['Day 01', 'Day 02', 'Day 03', 'Day 04', 'Day 05', 'Day 06'],
        datasets: [{
          label: 'Streak',
          backgroundColor: "white",
          borderColor: "#43BF97",
          data: [45, 30, 60, 81, 56, 55, 40],
          fill: false,
        },]
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [{gridLines: {
            color: '#eee',
            zeroLineColor: '#fff'
          }}],
          yAxes: [{
            display: false
          }],
        }
      }
    });

  }

  // Privacy box handler functions
  privacyHandler(){
    this.showPrivacyBox = !this.showPrivacyBox;
  }

  hidePrivacyBox(){
    this.showPrivacyBox = false;
  }

}
