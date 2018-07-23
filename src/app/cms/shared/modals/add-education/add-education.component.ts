import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.less']
})
export class AddEducationComponent implements OnInit {

  title: string;
  list: any[] = [];

  constructor(public bsModalRef: BsModalRef) {
  }
  public selected(value: any): void {
    console.log('Selected value is: ', value);
  }

  public removed(value: any): void {
    console.log('Removed value is: ', value);
  }

  public typed(value: any): void {
    console.log('New search input: ', value);
  }

  public refreshValue(value: any): void {

  }
  ngOnInit() {

    console.log(this.list);
  }



}
