import { Component, OnInit, OnDestroy } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-project-builder',
  templateUrl: './project-builder.component.html',
  styleUrls: ['./project-builder.component.less']
})
export class ProjectBuilderComponent implements OnInit {

  public blocks: Array<Object> = [];

  constructor(private dragulaService: DragulaService) {



  }

  ngOnInit() {

    // setup dragNdrop for creating content
    this.dragulaService.setOptions('builder-bag', {
      copy: true
    });
    // determine if drop is allowed
    this.dragulaService.drop.subscribe((value) => {
      this.onDrop(value);
    });
  }

  ngOnDestroy() {
    this.dragulaService.destroy('builder-bag');
  }

  // (0 - bagname, 1 - el, 2 - target, 3 - source, 4 - sibling)
  private onDrop(value) {
    if (value[2] == null) {
      return;
    }
    if (value[2].dataset.id === 'project-blocks') {

      this.addBlocks(value[3].dataset.id);
    }
    value[1].remove();
  }

  addBlocks(block) {

    this.blocks.push({type: block});
    console.log(this.blocks);
  }

}


