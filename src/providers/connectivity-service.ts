import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GoogleMaps provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ConnectivityService {

  constructor(public http: Http) {
    console.log('Hello ConnectivityService Provider');
  }

}


// import { Injectable } from '@angular/core';
// import { Network } from 'ionic-native';
// // Inject Platform to detect whether user is running on IOS or Android
// import { Platform } from 'ionic-angular';
//
// declare var Connection;
//
// @Injectable()
// export class ConnectivityService {
//
//   onDevice: boolean;
//
//   constructor(public platform: Platform){
//     this.onDevice = this.platform.is('cordova');
//   }
//
//   // functions check to see if user is onLine
//
//   // import service into necessary classes..
//
//   isOnline(): boolean {
//     if(this.onDevice && Network.connection){
//       return Network.connection !== Connection.NONE;
//     } else {
//       return navigator.onLine;
//     }
//   }
//
//   isOffline(): boolean {
//     if(this.onDevice && Network.connection){
//       return Network.connection === Connection.NONE;
//     } else {
//       return !navigator.onLine;
//     }
//   }
// }
