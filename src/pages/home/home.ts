import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConnectivityService } from '../../providers/connectivity-service';
import { Geolocation } from 'ionic-native';


// created a member variable to hold map
declare var google;

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {

  // created a member variable that references the map element
  @ViewChild('map') mapElement: ElementRef;

 map: any;
 mapInitialised: boolean = false;
 apiKey: any;

 constructor(public nav: NavController, public connectivityService: ConnectivityService) {
     this.loadGoogleMaps();
   }
}
  
