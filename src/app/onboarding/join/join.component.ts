import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.less']
})
export class JoinComponent implements OnInit {

  @Output() onLogin = new EventEmitter<boolean>();
  loggedIn = false;

  constructor() { }

  ngOnInit() {
  }

  loginInWithLinkedIn() {
    this.onLogin.emit(false);
  }
}
