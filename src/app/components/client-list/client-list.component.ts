import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.sass'],
  animations: [
    trigger('auhtorName', [
      state('start', style({
        opacity: '0'
      })),
      state('finish',   style({
        opacity: '1'
      })),
      transition('start => finish', animate('300ms ease-in')),
    ]),
    trigger('auhtorQuote', [
      state('start', style({
        transform: 'translateX(-10%)',
        opacity: '0'
      })),
      state('finish',   style({
        transform: 'translateX(0)',
        opacity: '1'
      })),
      transition('start => finish', animate('300ms ease-in')),
    ])
  ]
})


export class ClientListComponent {
  @ViewChild('wrapper') wrapper;

  clients = [
    {
      icon: '/assets/Images/logo-google.png',
      name: 'Google.com',
      quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      author: 'Google Zuckerberg'
    },
    {
      icon: '/assets/Images/logo-booking.png',
      quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      author: 'Booking Zuckerberg',
      name: 'Booking.com'
    },
    {
      icon: '/assets/Images/logo-dropbox.png',
      quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      author: 'Dropbox Zuckerberg',
      name: 'Dropbox.com'
    },
    {
      icon: '/assets/Images/logo-facebook.png',
      quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      author: 'Facebook Zuckerberg',
      name: 'Facebook.com'
    },
    {
      icon: '/assets/Images/logo-groupon.png',
      quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      author: 'Groupon Zuckerberg',
      name: 'Groupon.com'
    },
    {
      icon: '/assets/Images/logo-paypal.png',
      quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      author: 'Mark Zuckerberg',
      name: 'Paypal.com'
    }
  ]

  trianglePos: number = 0
  activeCompany: any = this.clients[0]
  imgList: NodeListOf<Element>

  constructor() { }

  ngAfterViewInit() {
    this.imgList = document.querySelectorAll('.client-list__item')
    setTimeout(_ => this.calculate(this.imgList[0]), 150)
  }

  public setCompany(event, item) {
    this.activeCompany = item
    this.calculate(event.target)
  }

  public calculate(elem) {
    let {left, right} = elem.getBoundingClientRect()
    this.trianglePos = left + ((right - left) / 2) - 15
    this.animate()
  }

  public nextCompany() {
    let currentIndex = this.clients.indexOf(this.activeCompany)
    if (currentIndex === (this.clients.length - 1)) {
      currentIndex = 0
      this.activeCompany = this.clients[0]
    } else {
      currentIndex++
      this.activeCompany = this.clients[currentIndex]
    }
    this.calculate(this.imgList[currentIndex])
  }

  animate(){
    this.activeCompany.state = 'start'
    setTimeout(()=> {this.activeCompany.state = 'finish'}, 100)
  }

  public prevCompany() {
    let currentIndex = this.clients.indexOf(this.activeCompany)
    if (currentIndex === 0) {
      currentIndex = this.clients.length - 1
      this.activeCompany = this.clients[currentIndex]
    } else {
      currentIndex--
      this.activeCompany = this.clients[currentIndex]
    }
    this.calculate(this.imgList[currentIndex])
  }

}
