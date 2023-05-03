import { Component, OnInit } from '@angular/core';
import {MenuToggleService} from '../../shared/services/menutoggle-services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  status : boolean;

  constructor(private menuToggleservice : MenuToggleService) { }

  ngOnInit() {
    this.menuToggleservice.sharedstatus.subscribe(status => this.status = status );
  }


  hideSidebar(){
    this.menuToggleservice.nextstatus(!this.status);
  }

}
