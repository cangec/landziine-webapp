import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less']
})
export class SkillsComponent implements OnInit {

  @Input() skills;
  public newSkill: INewSkill = {};


  constructor() {
  }

  ngOnInit() {

    console.log(this.skills);

  }

  addSkill() {
    this.skills.push(this.newSkill);
    this.newSkill = {};
    console.log(this.skills);
  }

}

interface INewSkill {
  name?: string;
  rating?: number;
};
