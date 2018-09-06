import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MinutePerMileRun} from "../model/minute-per-mile-run";

const STRAVA_SERVER = 'http://localhost:8089/strava-service';

@Injectable({
  providedIn: 'root'
})
export class StravaService {

  constructor(private http: HttpClient) { }

  getStravaStats(){
      return this.http.get(STRAVA_SERVER + '/getStats');
  }

  getMinutePerMileRuns(){
      return this.http.get(STRAVA_SERVER + '/getMinPerMileRuns');
  }
}
