import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AddTeammateComponent } from '../../shared/modals/add-teammate/add-teammate.component';

@Component({
  selector: 'app-architects',
  templateUrl: './architects.component.html',
  styleUrls: ['./architects.component.less']
})
export class ArchitectsComponent implements OnInit {

  @Input() architects;
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {

  }

  deleteArchitect(architect) {
    /* let architectIndex = _.findIndex(this.architects, {id: architect.id});
     const dialogRef = this.modal.prompt()
       .size('sm')
       .showClose(true)
       .isBlocking(false)
       .headerClass('prompt-header')
       .okBtnClass('lz-btn light-btn')
       .cancelBtnClass('lz-btn')
       .bodyClass('prompt-body')
       .footerClass('prompt-footer')
       .body('<h4>Are you sure you want to remove ' + architect.name + '?</h4>')
       .open().catch((err: any) => console.log('ERROR: ' + err))
       .then((dialog: any) =>  dialog.result)
       .then((result: any) => {this.architects.splice(architectIndex, 1); });
 */
  }

  addTeammate() {
    const list = [
      {
        name: 'Marko Bulic',
        selected: true,
        id: 1
      },
      {
        name: 'Helga Belga',
        selected: false,
        id: 1
      },
      {
        name: 'Ekmes Pekmes',
        selected: false,
        id: 1
      },
      {
        name: 'Fata Mudzahadin',
        selected: false,
        id: 1
      },
      {
        name: 'Senta Blazic',
        selected: true,
        id: 1
      },
      {
        name: 'Papa John',
        selected: false,
        id: 1
      },
      {
        name: 'Michael Jackson',
        selected: false,
        id: 1
      },
      {
        name: 'Ferdo Strgar',
        selected: false,
        id: 1
      },
      {
        name: 'Serfi John',
        selected: false,
        id: 1
      }
    ];
    this.bsModalRef = this.modalService.show(AddTeammateComponent);
    this.bsModalRef.content.title = 'Add a teammate';
    this.bsModalRef.content.list = list;
  }

}
