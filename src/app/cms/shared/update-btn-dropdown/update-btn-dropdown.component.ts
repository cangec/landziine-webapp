import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-update-btn-dropdown',
  templateUrl: './update-btn-dropdown.component.html',
  styleUrls: ['./update-btn-dropdown.component.less']
})
export class UpdateBtnDropdownComponent implements OnInit {

  @Input() showSearchBar;
  @Output() onUpdate = new EventEmitter<any>();
  @Output() onUnpublish = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  actionType: string;

  constructor() {
  }

  ngOnInit() {
    this.actionType = 'Update';
  }

  actionClick(type) {
    if (type === 'Update') {
      this.onUpdate.emit();
    }
    if (type === 'Unpublish') {
      this.onUnpublish.emit();
    }
    if (type === 'Delete') {
      this.onDelete.emit();
    }
  }

}
