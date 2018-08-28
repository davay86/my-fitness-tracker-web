import { Component, OnInit } from '@angular/core';
import {StravaService} from "../../services/strava.service";
import {StravaStats} from "../../model/strava-stats";

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  strava_stats: StravaStats;

  strava_stats_loaded: boolean;

  constructor(private strava_service: StravaService) { }

  ngOnInit() {
     this.strava_service.getStravaStats()
         .subscribe((data: StravaStats) => {this.strava_stats = {
              all_run_totals: data['all_run_totals']

         }
         this.strava_stats_loaded = true;
     });
  }

}
