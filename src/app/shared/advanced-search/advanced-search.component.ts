import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.less']
})
export class AdvancedSearchComponent implements OnInit {

  landscapeDropdownOpened = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggleLandscapeDropdown(opened) {
    this.landscapeDropdownOpened = opened;
  }

  selectItem(evt) {
    console.log(evt);
    evt.stopPropagation();
  }

}
