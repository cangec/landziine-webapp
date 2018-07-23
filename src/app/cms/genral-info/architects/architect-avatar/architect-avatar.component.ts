import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-architect-avatar',
  templateUrl: './architect-avatar.component.html',
  styleUrls: ['./architect-avatar.component.less']
})
export class ArchitectAvatarComponent implements OnInit {

  @Input() architect;
  @Output() onDeleteArchitect = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  deleteArchitect() {
    this.onDeleteArchitect.emit(this.architect);
  }

}
