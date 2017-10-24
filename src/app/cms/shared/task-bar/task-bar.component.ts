import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-bar',
  templateUrl: './task-bar.component.html',
  styleUrls: ['./task-bar.component.less']
})
export class TaskBarComponent implements OnInit {

  @Input() showSearchBar;

  constructor() { }

  ngOnInit() {
  }

}
