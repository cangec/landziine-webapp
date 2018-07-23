import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProjectBuilderServiceService } from '../../../services/project-builder-service.service';

@Component({
  selector: 'app-video-block',
  templateUrl: './video-block.component.html',
  styleUrls: ['./video-block.component.less']
})
export class VideoBlockComponent implements OnInit {

  @Input() title;
  @Input() removeIcon;
  @Output() onRemove = new EventEmitter<any>();
  @Input() index;
  embedCode: string;
  parsedVideoId;

  constructor(private projectService: ProjectBuilderServiceService) {

    setTimeout(() => {
      this.embedCode = this.projectService.project.blocks[this.index].content;
      this.parsedVideoId = true;
    });

  }

  ngOnInit() {
  }

  valueChange(value) {
    this.parsedVideoId = this.parseUrl(value);

    if (this.parsedVideoId) {
      let embedIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + this.parsedVideoId + '" frameborder="0" allowfullscreen></iframe>';
      setTimeout(() => {
        this.embedCode = embedIframe;
        this.projectService.project.blocks[this.index].content = embedIframe;
      });
    }
  }

  remove() {
    this.onRemove.emit();
  }

  parseUrl(url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : false;
  }

}
