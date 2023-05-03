import { Component, OnInit } from '@angular/core';
import {MenuToggleService} from '../../shared/services/menutoggle-services'
@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit {

  status : boolean;

  constructor(private menuToggleservice: MenuToggleService) { }

  ngOnInit() {
    this.menuToggleservice.sharedstatus.subscribe(status => this.status = status);
  }

}
