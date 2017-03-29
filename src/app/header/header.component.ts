import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
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


  constructor() { }

  ngOnInit() {
  }

}
