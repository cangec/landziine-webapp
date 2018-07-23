import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.less']
})
export class ImageUploadComponent implements OnInit {

  @Input() title;
  @Input() removeIcon;
  @Output() onRemove = new EventEmitter<any>();

  uploading = false;


  public uploader: FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver: boolean = false;

  public fileOverBase(e: any): void {
    setTimeout(() => {
      this.hasBaseDropZoneOver = e;
    }, 1);

  }
  public fileDropped(e: any): void {
    this.uploading = true;
  }

  constructor() {
  }

  ngOnInit() {

  }

  remove() {
    this.onRemove.emit();
  }
}
