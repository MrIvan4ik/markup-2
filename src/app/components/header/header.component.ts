import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  animations: [
    trigger('menu', [
      state('void', style({
        opacity: '0'
      })),
      state('finish',   style({
        opacity: '1'
      })),
      transition('* => *', animate('300ms ease-in')),
    ])
  ]
})
export class HeaderComponent implements OnInit {

  nav = [
    {
      title: 'Services'
    },
    {
      title: 'Portfolio'
    },
    {
      title: 'Team'
    },
    {
      title: 'Offices'
    },
    {
      title: 'Clients'
    },
    {
      title: 'Contact'
    },
  ]

  state: boolean = false

  constructor() { }

  ngOnInit() {
  }

  public onUpdate(state){
    this.state = state
  }
}
