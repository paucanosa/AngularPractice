import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import { widgetService } from '../widget.service';
import { widget } from '../models/interfaces';

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
  actual_dashboard: Array<any>
  number_widgets: number
  number_widgets_changed: number

  @Input()
  set dashboard(dashboard: widget[]) {
    if (dashboard) {
      this.actual_dashboard = dashboard
      this.number_widgets = dashboard.length
    }
  }
  @Output()
  save_dashboard = new EventEmitter<string>()

  @Output()
  load_dashboard = new EventEmitter<string>()

  constructor(private widgetService: widgetService) { }

  ngOnInit(): void {
    this.number_widgets_changed = 0
  }


  identify(index, widget) {
    return widget.id;
  }

  widgetChanged(iden: number, $event) {
    this.widgetService.replace_dashboard(this.actual_dashboard)

    var ReflowChartByID: Object;
    ReflowChartByID = { id: iden };
    this.ResizeObs.next(ReflowChartByID);
  }
  savedashboard() {
    this.save_dashboard.emit("save")
  }
  loaddashboard() {
    this.load_dashboard.emit("load")
  }
}
