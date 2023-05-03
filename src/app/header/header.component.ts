import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';
import { MenuToggleService } from '../shared/services/menutoggle-services'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})

export class HeaderComponent implements OnInit {


  showHeaderSearch: boolean = false;
  dashboardView: boolean = false;
  status: boolean;
  showNotidications : boolean = false;
  showMessages : boolean = false;
  showUsermenu : boolean = false;

  constructor(private router: Router, private menuToggleservice: MenuToggleService , private _eref: ElementRef) {
    let currentUrl = window.location.href;

    if (currentUrl.includes('dashboard')) {
      this.dashboardView = true;
    } else {
      this.dashboardView = false;
    }
  }

  ngOnInit() {
    this.menuToggleservice.sharedstatus.subscribe(status => this.status = status);
  }

  headerSearchHandler() {
    this.showHeaderSearch = !this.showHeaderSearch;
  }
  headerSearchHide() {
    this, this.showHeaderSearch = false;
  }

  
  sidebarToggleHandler() {
    this.menuToggleservice.nextstatus(!this.status);
  }



 
  onClick(event) {
    if (!this._eref.nativeElement.contains(event.target)) // or some similar check
    this.showNotidications = false;
    this.showMessages = false;
  }

  notificationsHandler() {
    this.showNotidications = !this.showNotidications;
    console.log("clicked");
  }

  messagesHandler(){
    this.showMessages = !this.showMessages;
  }

  userMenuhandler(){
    this.showUsermenu = !this.showUsermenu;
  }

}
