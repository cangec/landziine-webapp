import { Component, OnInit } from '@angular/core';
import { ProjectBuilderServiceService } from '../../services/project-builder-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {

  model;

  constructor(private projectService: ProjectBuilderServiceService) {

    this.model = this.projectService.project;

  }

  ngOnInit() {

  }

  update() {
    console.log(this.model);
  }

  unpublish() {
    console.log("unoublish woot");
  }

  delete() {
    console.log("woot delete");
  }

}
