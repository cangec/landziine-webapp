import { Component, Input, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {} from 'googlemaps';
import { MapsAPILoader } from '@agm/core';


@Component({
  selector: 'app-public-info',
  templateUrl: './public-info.component.html',
  styleUrls: ['./public-info.component.less']
})
export class PublicInfoComponent implements OnInit {

  @Input() publicInfo;
  public searchControl: FormControl;
  @ViewChild('search')
  public searchElementRef: ElementRef;


  constructor(private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) {

    // create search FormControl
    this.searchControl = new FormControl();

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          // get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // set latitude, longitude and zoom
          this.publicInfo.address = place.formatted_address;

        });
      });
    });

  }

  ngOnInit() {
  }



}
