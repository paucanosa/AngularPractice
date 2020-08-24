import { Component, OnInit, Input, resolveForwardRef, ChangeDetectionStrategy } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Subscription, Observable } from 'rxjs';
import {charOpt} from '../../widget.service'
@Component({
  selector: 'app-chart-panel',
  templateUrl: './chart-panel.component.html',
  styleUrls: ['./chart-panel.component.scss']
})
export class ChartPanelComponent implements OnInit {

  @Input()
  chart_id: number

  @Input()
  chart_opt:string

  @Input()
  events:Observable<Number>

  chart;
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
  reflowChart(chart_identifier)
  {
    console.log("Reflow in proces..." + chart_identifier + "(" + this.chart_id + ")")
    if(chart_identifier==this.chart_id)
    {
      this.chart.reflow();
    }
  }
  ngOnChanges()
  {
    this.reflowChart(this.events);
  }
  ngOnInit() {
    console.log(this.chart_opt)
    this.myChart = charOpt[this.chart_opt]
  }

}
