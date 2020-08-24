
import { Component, OnInit, Input} from '@angular/core';
import { GridsterComponent, IGridsterOptions, IGridsterDraggableOptions } from 'angular2gridster';
import {widgetService} from '../widget.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private widgetService: widgetService){

  }
  private subscription: Subscription;
  currentWidgets = [{title:"The one and only widget",type:"line",id:1,x:0,y:0,w:1,h:1,posx:0,posy:0}]

   
  ngOnInit() {
       this.subscription = this.widgetService.notifyObservable$.subscribe((res) => {
       console.log("CurrentDashboard changed");
       this.currentWidgets = res
   });
   }
   
}
