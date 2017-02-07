import { Injectable } from '@angular/core';
import { Network } from 'ionic-native';
// Inject Platform to detect whether user is running on IOS or Android
import { Platform } from 'ionic-angular';

declare var Connection;

@Injectable()
export class ConnectivityService {

  onDevice: boolean;

  constructor(public platform: Platform){
    this.onDevice = this.platform.is('cordova');
  }

  // functions check to see if user is onLine

  // import service into necessary classes..

  isOnline(): boolean {
    if(this.onDevice && Network.connection){
      return Network.connection !== Connection.NONE;
    } else {
      return navigator.onLine;
    }
  }

  isOffline(): boolean {
    if(this.onDevice && Network.connection){
      return Network.connection === Connection.NONE;
    } else {
      return !navigator.onLine;
    }
  }
}
