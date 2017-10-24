import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-project-blocks',
  templateUrl: './project-blocks.component.html',
  styleUrls: ['./project-blocks.component.less']
})
export class ProjectBlocksComponent implements OnInit {

  constructor(
    private dragulaService: DragulaService
  ) {



  }

  ngOnInit() {
  }



}
