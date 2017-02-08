import { Component } from '@angular/core';
import { MapPage } from '../map/map';
import { ListPage } from '../list/list';
 

// import { Component, ViewChild, ElementRef } from '@angular/core';
// import { NavController } from 'ionic-angular';
// import { ConnectivityService } from '../../providers/connectivity-service';
// import { Geolocation } from 'ionic-native';


// created a member variable to hold map
declare var google;

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})

export class HomePage {

  tab1Root: any = MapPage;
  tab2Root: any = ListPage;

  constructor() {

  }




// export class HomePage {
//
//   // created a member variable that references the map element
//   @ViewChild('map') mapElement: ElementRef;
//
//  map: any;
//  mapInitialised: boolean = false;
//  apiKey: any;
//
// // loadGoogleMaps function triggers logic
//  constructor(public nav: NavController, public connectivityService: ConnectivityService) {
//      this.loadGoogleMaps();
//    }
//
//   //  loadGoogleMaps checks to see if google obect is available, which means SDK has loaded
//
//    loadGoogleMaps(){
//
//     this.addConnectivityListeners();
//
//   if(typeof google == "undefined" || typeof google.maps == "undefined"){
//
//     console.log("Google maps JavaScript needs to be loaded.");
//     this.disableMap();
//
//     // If the SDK has not been loaded then we check if the user is online and then we load it by injecting the script into the document
//     if(this.connectivityService.isOnline()){
//       console.log("online, loading map");
//
//       //Load the SDK, trigger callback function so we know its safe to start
//       window['mapInit'] = () => {
//         this.initMap();
//         this.enableMap();
//       }
//
//       let script = document.createElement("script");
//       script.id = "googleMaps";
//
//       if(this.apiKey){
//         script.src = 'http://maps.google.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
//       } else {
//         script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
//       }
//
//       document.body.appendChild(script);
//
//     }
//   }
//   else {
//
//     if(this.connectivityService.isOnline()){
//       console.log("showing map");
//       this.initMap();
//       this.enableMap();
//     }
//     else {
//       console.log("disabling map");
//       this.disableMap();
//     }
//
//   }
//
//   }
//   // initializes map
//   initMap(){
//
//     this.mapInitialised = true;
//
//     Geolocation.getCurrentPosition().then((position) => {
//
//       let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//
//       let mapOptions = {
//         center: latLng,
//         zoom: 15,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//       }
//
//       this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
//
//     });
//
//   }
//
//   addMarker(){
//
//   let marker = new google.maps.Marker({
//     map: this.map,
//     animation: google.maps.Animation.DROP,
//     position: this.map.getCenter()
//   });
//
//   let content = "<h4>Information!</h4>";
//
//   this.addInfoWindow(marker, content);
//
//   }
//
//   disableMap(){
//     console.log("disable map");
//   }
//
//   enableMap(){
//     console.log("enable map");
//   }
//
// // Listen for when users come back online
//   addConnectivityListeners(){
//
//     let onOnline = () => {
//
//       setTimeout(() => {
//         if(typeof google == "undefined" || typeof google.maps == "undefined"){
//
//           this.loadGoogleMaps();
//
//         } else {
//
//           if(!this.mapInitialised){
//             this.initMap();
//           }
//
//           this.enableMap();
//         }
//       }, 2000);
//
//     };
//
//     let onOffline = () => {
//       this.disableMap();
//     };
//
//     document.addEventListener('online', onOnline, false);
//     document.addEventListener('offline', onOffline, false);
//   }




}
