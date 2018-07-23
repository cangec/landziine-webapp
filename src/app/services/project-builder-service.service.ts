import { Injectable } from '@angular/core';

@Injectable()
export class ProjectBuilderServiceService {

  public project: IProject = {
    blocks: [
      {type: 'text', content: '<p>Some project description here</p>'},
      {type: 'video', content: '<iframe width="560" height="315" src="https://www.youtube.com/embed/oH46Cr33-h4" frameborder="0" allowfullscreen></iframe>'}
    ],
    location: {
      address: '3231 Grobelno - del, Slovenija',
      latitude: 46.21494849999999,
      longitude: 15.445523900000012
    }
  };

  constructor() {
  }

}

interface IProject {
  name?: string;
  id?: number;
  location?: {
    latitude?: number,
    longitude?: number,
    address?: string
  };
  from?: Date;
  to?: Date;
  blocks: IBlock[];
}

interface IBlock {
  type: string;
  content: any;
}
