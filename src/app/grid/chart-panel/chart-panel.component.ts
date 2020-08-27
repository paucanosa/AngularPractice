import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import * as Highcharts from 'highcharts';
import { charOpt } from '../../widget.service';

@Component({
  selector: 'app-chart-panel',
  templateUrl: './chart-panel.component.html',
  styleUrls: ['./chart-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartPanelComponent implements OnInit {
  
  chart;
  updateFromInput = false;
  Highcharts = Highcharts;
  chartConstructor = "chart";
  chartCallback;
  myChart;

  @Input()
  chart_id: number

  @Input()
  chart_opt: string

  @Input()
  set ReflowChartByID(obj: Object) {
    if( obj != null)
    {
      if (obj['id']== this.chart_id)
        this.chart.reflow();
    }  
  }
  
  constructor() {
    this.chartCallback = chart => {
      this.chart = chart;
    };
  }
  ngOnInit() {
    console.log("New chart")
    this.myChart = charOpt[this.chart_opt]
  }

}
