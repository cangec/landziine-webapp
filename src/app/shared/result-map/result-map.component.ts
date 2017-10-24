import { Component, OnInit } from '@angular/core';
import { MapStyles } from '../map-styles';

@Component({
  selector: 'app-result-map',
  templateUrl: './result-map.component.html',
  styleUrls: ['./result-map.component.less']
})
export class ResultMapComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  // gmaps settings
  private gmaps: any = {
    styles: MapStyles.styles
  };

  constructor() { }

  ngOnInit() {
  }

}
