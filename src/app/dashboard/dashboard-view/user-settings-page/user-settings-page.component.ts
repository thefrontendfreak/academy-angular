import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-settings-page',
  templateUrl: './user-settings-page.component.html',
  styleUrls: ['./user-settings-page.component.scss']
})
export class UserSettingsPageComponent implements OnInit {

  items = ['Math', 'Physics', 'Biology','Chemistry'];

  constructor() { }

  ngOnInit() {
  }

}
