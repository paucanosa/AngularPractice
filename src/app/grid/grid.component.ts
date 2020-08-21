import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as Highcharts from 'highcharts';
import {AreaOptions} from '../charts/areachart'
import {LineOptions} from '../charts/linechart'
import {BarOptions} from '../charts/barchart'
import {PieOptions}from '../charts/piechart'
import { HighchartsChartComponent } from 'highcharts-angular';
import { ThrowStmt } from '@angular/compiler';
import { Subject, timer } from 'rxjs';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  gridsterOptions = {
    lanes: 5, // how many lines (grid cells) dashboard has
    direction: 'vertical', // items floating direction: vertical/horizontal
    dragAndDrop: true, // possible to change items position by drag n drop
    resizable: true, // possible to resize items by drag n drop by item edge/corner
    useCSSTransforms: true, // improves rendering performance by using CSS transform in place of left/top
  };

  ResizeSubject: Subject<number> = new Subject<number>();

  @Input()
  widgets: Array<any>
  
  constructor() {}

  ngOnInit(): void {
  }
  itemChanged(iden:number){
    this.ResizeSubject.next(iden)
  }
  }
