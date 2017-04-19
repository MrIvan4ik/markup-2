import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.sass']
})
export class HamburgerComponent implements OnInit {
  @Input() state: boolean
  @Output() update = new EventEmitter();
  // state:boolean = false

  constructor() { }

  ngOnInit() {
    console.log(this)
  }

  public toggle(event){
    this.state = !this.state
    this.update.emit(this.state)
  }

}
