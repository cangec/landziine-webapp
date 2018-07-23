import { Component, ElementRef, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-private-info-individual',
  templateUrl: './private-info-individual.component.html',
  styleUrls: ['./private-info-individual.component.less']
})
export class PrivateInfoIndividualComponent implements OnInit {

  privateInfoIndividual = {
    address: ''
  };
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
          this.privateInfoIndividual.address = place.formatted_address;

          console.log(place);

        });
      });
    });

  }

  ngOnInit() {
  }




}
