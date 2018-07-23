import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gallery-block',
  templateUrl: './gallery-block.component.html',
  styleUrls: ['./gallery-block.component.less']
})
export class GalleryBlockComponent implements OnInit {

  @Input() title;
  @Input() removeIcon;
  @Output() onRemove = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {

  }

  remove() {
    this.onRemove.emit();
  }

}
