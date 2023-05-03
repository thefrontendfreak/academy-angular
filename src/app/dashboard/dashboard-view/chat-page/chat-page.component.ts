import { style } from '@angular/animations';
import { VariableAst } from '@angular/compiler';
import { Component, OnInit , AfterViewInit } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {
  container: HTMLElement;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {         
    this.container = document.getElementById("chatMessages");           
    this.container.scrollTop = this.container.scrollHeight;     
  }  

  
}




