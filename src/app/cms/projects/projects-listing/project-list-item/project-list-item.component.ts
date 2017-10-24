import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.less']
})
export class ProjectListItemComponent implements OnInit {

  @Input() title;
  @Input() status;
  @Input() excerpt;
  @Input() selected;
  constructor() { }

  ngOnInit() {
  }

}
