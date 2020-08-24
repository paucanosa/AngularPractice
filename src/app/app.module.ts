import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GridsterModule} from 'angular2gridster';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { GridComponent } from './grid/grid.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartPanelComponent } from './grid/chart-panel/chart-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GridComponent,
    ChartPanelComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridsterModule.forRoot(),
    FormsModule,
    HighchartsChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
