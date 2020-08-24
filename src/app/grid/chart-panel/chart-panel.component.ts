import { Component, OnInit, Input, resolveForwardRef, ChangeDetectionStrategy } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Subscription, Observable } from 'rxjs';
import { charOpt } from '../../widget.service'
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
  set events(events: Object) {
    console.log("Changed (" + events + ")")
    if (events['id']== this.chart_id) {
      console.log("Reflow in proces..." + events + "(" + this.chart_id + ")")
      this.chart.reflow();
      this.lastevent = this.chart_id
    }
  }
  lastevent: number
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
    this.lastevent = 0
    console.log(this.chart_opt)
    this.myChart = charOpt[this.chart_opt]
  }

}
