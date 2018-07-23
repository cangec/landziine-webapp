import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AddEducationComponent } from '../../shared/modals/add-education/add-education.component';



@Component({
  selector: 'app-public-info-individual',
  templateUrl: './public-info-individual.component.html',
  styleUrls: ['./public-info-individual.component.less']
})
export class PublicInfoIndividualComponent implements OnInit {

  publicInfoIndividual = {};
  bsModalRef: BsModalRef;

  constructor(  private modalService: BsModalService) {
  }

  ngOnInit() {
  }

  addEducation() {
    const list = [
      {
        text: 'Marko Bulic',
        id: '123'
      },
      {
        text: 'Helga Belga',
        selected: false,
        id: '1244567'
      },
      {
        text: 'Ekmes Pekmes',
        selected: false,
        id: '124'
      },
      {
        text: 'Fata Mudzahadin',
        selected: false,
        id: '3246'
      },
      {
        text: 'Senta Blazic',
        selected: true,
        id: '45762457'
      },
      {
        text: 'Papa John',
        selected: false,
        id: '245734567'
      },
      {
        text: 'Michael Jackson',
        selected: false,
        id: '346879'
      },
      {
        text: 'Ferdo Strgar',
        selected: false,
        id: '6795950'
      },
      {
        text: 'Serfi John',
        selected: false,
        id: '7696709'
      }
    ];
    this.bsModalRef = this.modalService.show(AddEducationComponent);
    this.bsModalRef.content.title = 'Edit education';
    this.bsModalRef.content.list = list;
  }
  addEducation2 () {

  }

}
