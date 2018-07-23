import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';



@Component({
  selector: 'app-add-teammate',
  templateUrl: './add-teammate.component.html',
  styleUrls: ['./add-teammate.component.less']
})
export class AddTeammateComponent implements OnInit {

  title: string;
  list: any[] = [];

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {

  }

}
