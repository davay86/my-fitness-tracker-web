import { Component, OnInit } from '@angular/core';
import {StravaService} from "../../services/strava.service";
import {MinutePerMileRun} from "../../model/minute-per-mile-run";
import {run} from "tslint/lib/runner";

@Component({
  selector: 'app-min-per-mile-graph',
  templateUrl: './min-per-mile-graph.component.html',
  styleUrls: ['./min-per-mile-graph.component.css']
})
export class MinPerMileGraphComponent implements OnInit {

  public lineChartData:Array<any>;
  //= [
    //{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}];
   // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
   // {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  //];
  public lineChartLabels:Array<String> = [];

  public lineChartOptions:any = {
    responsive: true
  };

  minutePerMileRuns:Array<MinutePerMileRun>;

  graph_loaded:boolean =false;

  constructor(private strava_service: StravaService) { }
  ngOnInit() {
    this.strava_service.getMinutePerMileRuns()
        .subscribe((data: Array<MinutePerMileRun>) => {
          this.minutePerMileRuns = data;
          this.populateLineGraph();
        });


  }

  private populateLineGraph() {
    this.lineChartLabels = [];
    var data:number[] = [];
    var labels:String[] = [];
    this.lineChartData = [];

    for(let runPerMinute of this.minutePerMileRuns){

      labels.push(runPerMinute.dateOfRun);

      data.push(runPerMinute.averagePace);

    }

    labels.reverse();
    data.reverse();
    this.lineChartLabels = labels;
    this.lineChartData.push({data: data, label: 'Min per Mile'});

    this.graph_loaded = true;
  }
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
