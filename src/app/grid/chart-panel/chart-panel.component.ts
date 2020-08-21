import { Component, OnInit, Input, resolveForwardRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Subscription, Observable } from 'rxjs';
import {AreaOptions} from '../../charts/areachart'
import {LineOptions} from '../../charts/linechart'
import {BarOptions} from '../../charts/barchart'
import {PieOptions}from '../../charts/piechart'
@Component({
  selector: 'app-chart-panel',
  templateUrl: './chart-panel.component.html',
  styleUrls: ['./chart-panel.component.scss']
})
export class ChartPanelComponent implements OnInit {
  private ResizeSubscription: Subscription;

  @Input()
  chart_id: number

  @Input()
  chart_opt:string

  @Input()
  events:Observable<void>

  chart;
  charOpt: { [id: string] : Object; } = {};
  updateFromInput = false;
  Highcharts = Highcharts;
  chartConstructor = "chart";
  chartCallback;
  myChart;

  constructor() {
    this.chartCallback = chart => {
      this.chart = chart;
    };
    
  }
  reflow(res)
  {
    if(res==this.chart_id)
    {
      console.log("Resize time from" + this.chart_id)
      this.chart.reflow();
    }
  }

  ngOnInit() {
    this.charOpt["line"] = LineOptions
    this.charOpt["bar"] = BarOptions
    this.charOpt["area"] = AreaOptions
    this.charOpt["pie"] = PieOptions
    this.ResizeSubscription = this.events.subscribe((res) => this.reflow(res));
    console.log(this.chart_opt)
    this.myChart = this.charOpt[this.chart_opt]
  }

}
