import { Component, OnInit } from '@angular/core';
import { GeneralInfoService } from '../../services/general-info.service';

@Component({
  selector: 'app-genral-info',
  templateUrl: './genral-info.component.html',
  styleUrls: ['./genral-info.component.less']
})
export class GenralInfoComponent implements OnInit {

  generalInfo;
  generalInfoIndividual;
  role;

  constructor(private generalInfoService: GeneralInfoService) {

    this.generalInfo = generalInfoService.generalInfo;
    this.generalInfoIndividual = generalInfoService.generalInfoIndividual;
    this.role = 'COMPANY';

  }

  update() {
    console.log(this.generalInfo);
  }

  switchRole(role) {
    console.log(role);
    this.role = role;
  }

  ngOnInit() {
  }

}
