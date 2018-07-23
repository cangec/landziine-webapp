import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.less']
})
export class EmployeesComponent implements OnInit {

  @Input() projectMembers;
  constructor() { }

  ngOnInit() {
  }

}
