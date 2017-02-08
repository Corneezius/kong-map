import { Component, ElementRef, ViewChild } from '@angular/core';
import { Locations } from '../../providers/locations';
import { GoogleMaps } from '../../providers/google-maps';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  // Grab reference to  map and please connect element and then makecall to initialise the map using the Google Maps provider
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;

  constructor(public navCtrl: NavController, public maps: GoogleMaps, public platform: Platform, public locations: Locations) {

  }

  ionViewDidLoad(){

    this.platform.ready().then(() => {
      let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement);
                  let locationsLoaded = this.locations.load();

                  //  wait until all the promises supplied have resolved...
                  Promise.all([
                      mapLoaded,
                      locationsLoaded
                      // before invoking the .then() handler
                  ]).then((result) => {
                      // Once the promises do resolve, a single result is passed in, which is an array containing the data from all the promises that have resolved
                      let locations = result[1];

                      for(let location of locations){
                          this.maps.addMarker(location.latitude, location.longitude);
                      }

                  });

              });

          }

      }
