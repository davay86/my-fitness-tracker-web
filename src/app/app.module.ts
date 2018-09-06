import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { StravaService } from './services/strava.service';
import {HttpClientModule} from "@angular/common/http";
import { MinPerMileGraphComponent } from './components/min-per-mile-graph/min-per-mile-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    MinPerMileGraphComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [StravaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
