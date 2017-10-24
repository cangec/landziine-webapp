import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {

  items = ['Pizza', 'Pasta', 'Parmesan'];
  @Output() onWelcomeDone = new EventEmitter<boolean>();
  welcomeDone = false;

  constructor() { }

  ngOnInit() {
  }

  continue() {
    this.onWelcomeDone.emit(true);
  }

}
