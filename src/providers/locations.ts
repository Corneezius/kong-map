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

                this.data = data.locations
                resolve(this.data);

            });

        });

    }

}
