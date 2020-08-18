import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {AddwidgetService} from '../addwidget.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  private subscription: Subscription;
  gridsterOptions = {
    lanes: 5, // how many lines (grid cells) dashboard has
    direction: 'vertical', // items floating direction: vertical/horizontal
    dragAndDrop: true, // possible to change items position by drag n drop
    resizable: true, // possible to resize items by drag n drop by item edge/corner
    useCSSTransforms: true, // improves rendering performance by using CSS transform in place of left/top
  };
  widgets = [{title: "The one and only widget"}]
  constructor(private AddwidgetService: AddwidgetService ) { }
  

  ngOnInit(): void {
    this.subscription = this.AddwidgetService.notifyObservable$.subscribe((res) => {
        console.log("Added");
        this.widgets.push({title:"Another one"})
    });
  }

}
