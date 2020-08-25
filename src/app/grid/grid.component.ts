import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject, timer, Observable } from 'rxjs';
import {widgetService} from '../widget.service';
import { GridsterComponent } from 'angular2gridster';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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

  ResizeObs: Subject<Object> = new Subject<Object>();
  @Input()
  widgets: Array<any>
  
  constructor(private widgetService: widgetService) {}

  ngOnInit(): void {
  }
  itemChanged(iden:number,$event){
    this.widgetService.updateWidget(iden,$event["item"]["x"],$event["item"]["y"],$event["item"]["w"],$event["item"]["h"],$event["item"]["positionX"],$event["item"]["positionY"])

    var ReflowChartByID: Object;
    ReflowChartByID = {id:iden};

    this.ResizeObs.next(ReflowChartByID);
  }
  savedashboard()
   {
     this.widgetService.saveDashboard()
     console.log("Saving Dashboard...")
   }
   loaddashboard()
   {
     this.widgetService.loadDashboard()
     console.log("Loading Dashboard...")
   }
  }
