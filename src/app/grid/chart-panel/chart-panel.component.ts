import { Component, OnInit, Input, resolveForwardRef, ChangeDetectionStrategy } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Subscription, Observable } from 'rxjs';
import { charOpt } from '../../widget.service'
import { isEmptyExpression } from '@angular/compiler';
@Component({
  selector: 'app-chart-panel',
  templateUrl: './chart-panel.component.html',
  styleUrls: ['./chart-panel.component.scss']
})
export class ChartPanelComponent implements OnInit {

  @Input()
  chart_id: number

  @Input()
  chart_opt: string

  @Input()
  set ReflowChartByID(obj: Object) {
    if( obj != null)
    {
      if (obj['id']== this.chart_id) {
        this.chart.reflow();
      }
    }
    
  }
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
  ngOnInit() {
    this.myChart = charOpt[this.chart_opt]
  }

}
