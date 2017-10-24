import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-job-card',
  templateUrl: './open-job-card.component.html',
  styleUrls: ['./open-job-card.component.less']
})
export class OpenJobCardComponent implements OnInit {

  @Input() listing;

  constructor() { }

  ngOnInit() {
  }

}
