import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProjectBuilderServiceService } from '../../../../services/project-builder-service.service';
import {} from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { DatepickerOptions } from 'ng2-datepicker';
import { MapStyles } from '../../../../shared/map-styles';


@Component({
  selector: 'app-project-basic-info',
  templateUrl: './project-basic-info.component.html',
  styleUrls: ['./project-basic-info.component.less']
})
export class ProjectBasicInfoComponent implements OnInit {

  public basicInfo;
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public isAddress: boolean;
  // gmaps settings
  private gmaps: any = {
    styles: MapStyles.styles
  };

  @ViewChild('search')
  public searchElementRef: ElementRef;

  options: DatepickerOptions = {
    minYear: 1970,
    maxYear: 2030,
    displayFormat: 'MMM D[,] YYYY',
    barTitleFormat: 'MMMM YYYY',
    firstCalendarDay: 0 // 0 - Sunday, 1 - Monday
  };

  constructor(private projectService: ProjectBuilderServiceService,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) {

    this.basicInfo = this.projectService.project;
    this.basicInfo.from = new Date();
    this.basicInfo.to = new Date();

  }

  ngOnInit() {
    // set google maps defaults
    this.zoom = 12;
    this.latitude = this.basicInfo.location.latitude;
    this.longitude = this.basicInfo.location.longitude;
    this.isAddress = !!(this.basicInfo.location.latitude && this.basicInfo.location.longitude);

    // create search FormControl
    this.searchControl = new FormControl();

    // set current position
    if (!this.latitude && !this.longitude) {
      this.setCurrentPosition();
    }

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
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.basicInfo.location.latitude = place.geometry.location.lat();
          this.basicInfo.location.longitude = place.geometry.location.lng();
          this.basicInfo.location.address = place.formatted_address;
          this.zoom = 12;

          if (place) {
            this.isAddress = true;
          }
          else {
            this.isAddress = false;
          }
        });
      });
    });
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

}
