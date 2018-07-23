import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { ProjectBuilderServiceService } from '../../../services/project-builder-service.service';


@Component({
  selector: 'app-project-builder',
  templateUrl: './project-builder.component.html',
  styleUrls: ['./project-builder.component.less']
})
export class ProjectBuilderComponent implements OnInit, OnDestroy {

  public project;
  public dropIndex;
  public dragIndex;


  constructor(private dragulaService: DragulaService, private projectService: ProjectBuilderServiceService) {

    this.project = this.projectService.project;

    // setup dragNdrop for creating content
    dragulaService.setOptions('page-bag', {
      copy: function (el, source) {
        // To copy only elements in left container, the right container can still be sorted
        return source.id === 'right';
      },
      copySortSource: false,
      accepts: (el, target, source, sibling) => {
        // To avoid draggin from right to left container
        return target.id !== 'right';
      },
    });
    // determine if drop is allowed
    this.dragulaService.drop.subscribe((value) => {
      this.onDrop(value);
    });
    this.dragulaService.drag.subscribe((value) => {
      this.onDrag(value);
    });

  }

  ngOnInit() {

  }

  // (0 - bagname, 1 - el, 2 - target, 3 - source, 4 - sibling)
  private onDrop(value) {

    this.dropIndex = this.getElementIndex(value[1]);

    if (value[2] == null) {
      return;
    }
    // if dropped from right add my own block and remove the one that was deopped
    if (value[3].id === 'right') {
      this.addBlocks(value[1].dataset.id, this.dropIndex);
      value[1].remove();
    }
    if (value[2].id === 'left') {
      if (this.dragIndex || this.dragIndex === 0) {
        this.project.blocks = this.rearrangeBlocks(this.project.blocks, this.dragIndex, this.dropIndex);
      }
    }
  }

  private onDrag(value) {
    if (value[2].id === 'left') {
      this.dragIndex = this.getElementIndex(value[1]);
    }
  }


  addBlocks(block, index) {
    this.project.blocks.splice(index, 0, {type: block});
  }

  getElementIndex = (el: any) => {
    if (el.parentElement) {
      return [].slice.call(el.parentElement.children).indexOf(el);
    }
  }

  rearrangeBlocks = (arr, fromIndex, toIndex) => {
    const element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
    return arr;
  }

  removeBlock(index) {
    this.project.blocks.splice(index, 1);
  }

  ngOnDestroy() {
    this.dragulaService.destroy('page-bag');
  }

}







