import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const STRAVA_SERVER = 'http://localhost:8089/strava-service';

@Injectable({
  providedIn: 'root'
})
export class StravaService {

  constructor(private http: HttpClient) { }

  getStravaStats(){
      return this.http.get(STRAVA_SERVER + '/getStats');
  }
}
