import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-bar',
  templateUrl: './task-bar.component.html',
  styleUrls: ['./task-bar.component.less']
})
export class TaskBarComponent implements OnInit {

  @Input() showSearchBar;
  @Output() onUpdate = new EventEmitter<any>();
  @Output() onUnpublish = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  update() {
    this.onUpdate.emit();
  }

  unpublish() {
    this.onUnpublish.emit();
  }

  delete() {
    this.onDelete.emit();
  }

}
