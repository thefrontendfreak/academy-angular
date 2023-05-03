import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-yoacademy';
  dashboardView  : boolean = false;

  public currentRoute = '' ;
  
  constructor(private router: Router) { 
    let myurl = window.location.href;
    

    if(myurl.includes('/dashboard')){
      this.dashboardView = true;
    }else{
      this.dashboardView = false;
    }


    this.currentRoute = router.url;
    
    // router.events.forEach((event) => {
    //   if (event instanceof NavigationStart) {
    //     if (event['url'] == '/dashboard') {
    //       console.log(event.url , myurl , "dur beta makal");
    //       this.dashboardView = true;
    //     }else{
    //       this.dashboardView = false;
    //     } 
    //   }
    // });

  }
  
}


