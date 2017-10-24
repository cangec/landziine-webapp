import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.less']
})
export class ApplicantComponent implements OnInit {

  @Input() name;

  constructor() { }

  ngOnInit() {
  }

}
