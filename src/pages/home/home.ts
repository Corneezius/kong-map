import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController) {

  }

  ionViewLoaded(){
    this.loadMap();
  }

  loadMap(){

     Geolocation.getCurrentPosition().then((position) => {

    // create a LatLng object to represent location on map
    let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    // mapOptions allows customization,i.e, zoom level, type of map
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      }, (err) => {
     console.log(err);
    });
  }
}
