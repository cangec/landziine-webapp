import { Component, OnInit } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { MapStyles } from '../map-styles';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less'],
  providers: [ GoogleMapsAPIWrapper ]
})
export class MapComponent implements OnInit {


  lat: number = 51.678418;
  lng: number = 7.809007;

  // gmaps settings
  private gmaps: any = {
    styles: MapStyles.styles
  };

  constructor(private _mapsWrapper: GoogleMapsAPIWrapper) {

  }

  ngOnInit() {


  }
}
