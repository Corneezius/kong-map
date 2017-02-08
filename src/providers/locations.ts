import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Locations {

    data: any;

    // handle loading the data into the application by making a HTTP request to the JSON file

    constructor(public http: Http) {

    }

    load(){

        if(this.data){
            return Promise.resolve(this.data);
        }

        return new Promise(resolve => {
          // convert the JSON string into a Javascript object by mapping the response and calling the .json() method
            this.http.get('assets/data/locations.json').map(res => res.json()).subscribe(data => {

              this.data = this.applyHaversine(data.locations);

                      this.data.sort((locationA, locationB) => {
                          return locationA.distance - locationB.distance;
                      });

                      resolve(this.data);
                  });


        });

    }
    applyHaversine(locations){

      // first defines users actual location

        let usersLocation = {
            lat: 40.713744,
            lng: -74.009056
        };

        // calls map method which iterates though each element in the array and creates a new property on each element called distance

        locations.map((location) => {

            let placeLocation = {
                lat: location.latitude,
                lng: location.longitude
            };

            location.distance = this.getDistanceBetweenPoints(
                usersLocation,
                placeLocation,
                'miles'
            ).toFixed(2);
        });

        return locations;
    }

    getDistanceBetweenPoints(start, end, units){

        let earthRadius = {
            miles: 3958.8,
            km: 6371
        };

        let R = earthRadius[units || 'miles'];
        let lat1 = start.lat;
        let lon1 = start.lng;
        let lat2 = end.lat;
        let lon2 = end.lng;

        let dLat = this.toRad((lat2 - lat1));
        let dLon = this.toRad((lon2 - lon1));
        let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let d = R * c;

        return d;

    }

    toRad(x){
        return x * Math.PI / 180;
    }

}
