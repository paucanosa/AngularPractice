import { Component, OnInit, Input} from '@angular/core';
import { GridsterComponent, IGridsterOptions, IGridsterDraggableOptions } from 'angular2gridster';
import {widgetService} from './widget.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private widgetService: widgetService){

  }
  private subscription: Subscription;
  currentWidgets = [{title: "The one and only widget",type:"line",id:1}]
   
  ngOnInit() {
       this.subscription = this.widgetService.notifyObservable$.subscribe((res) => {
       console.log("Added from appcomponent");
       this.currentWidgets = res
   });
   }
}