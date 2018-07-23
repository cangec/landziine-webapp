import { Component, EventEmitter, Input, OnInit, Output, OnChanges, AfterViewInit } from '@angular/core';
import { ProjectBuilderServiceService } from '../../../services/project-builder-service.service';


@Component({
  selector: 'app-text-block',
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.less']
})
export class TextBlockComponent implements OnInit, AfterViewInit {

  @Input() title;
  @Input() removeIcon;
  @Output() onRemove = new EventEmitter<any>();
  @Input() index;
  content;

  public froalaOptions: Object = {
    placeholderText: 'Edit text content here',
    charCounterCount: false,
    toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'fontSize', 'color', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', 'insertLink', '|', 'undo', 'redo']
  };



  constructor(private projectService: ProjectBuilderServiceService) {

    setTimeout(() => {
      this.content = this.projectService.project.blocks[this.index].content;
    });

  }

  ngOnInit() {
  }

  remove() {
    this.onRemove.emit();
  }

  valueChange(value) {
    this.projectService.project.blocks[this.index].content = value;
  }

  ngAfterViewInit() {

  }


}
