import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-block',
  templateUrl: './project-block.component.html',
  styleUrls: ['./project-block.component.less']
})
export class ProjectBlockComponent implements OnInit {

  @Input() type;

  constructor() { }

  ngOnInit() {
  }

}
