import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-list-item',
  templateUrl: './job-list-item.component.html',
  styleUrls: ['./job-list-item.component.less']
})
export class JobListItemComponent implements OnInit {

  @Input() title;
  @Input() status;
  @Input() excerpt;
  @Input() selected;
  constructor() { }

  ngOnInit() {
  }

}
