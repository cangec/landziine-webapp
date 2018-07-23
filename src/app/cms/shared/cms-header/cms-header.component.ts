import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-cms-header',
  templateUrl: './cms-header.component.html',
  styleUrls: ['./cms-header.component.less']
})
export class CmsHeaderComponent implements OnInit {

  @Output() onChangeRole = new EventEmitter<any>();
  @Input() role;

  constructor() {
  }

  ngOnInit() {
  }

  switchRole() {

    this.role = this.role === 'INDIVIDUAL' ? 'COMPANY' : 'INDIVIDUAL';
    this.onChangeRole.emit(this.role);

  }

}
