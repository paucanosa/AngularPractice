import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { analysisStore } from './analysis.store'
import { AreaOptions } from './models/charts/areachart'
import { LineOptions } from './models/charts/linechart'
import { BarOptions } from './models/charts/barchart'
import { PieOptions } from './models/charts/piechart'
import { widget } from './models/interfaces'
export { charOpt }
var charOpt: { [id: string]: Object; } = {};
charOpt["line"] = LineOptions
charOpt["bar"] = BarOptions
charOpt["area"] = AreaOptions
charOpt["pie"] = PieOptions


@Injectable({
  providedIn: 'root'
})
export class widgetService {
  constructor() { }

  ngOnInit() { }

  public addWidget(typew: string) {
    let actual_dashboard = analysisStore.getValue("current_dashboard")
    var newwidget: widget = {
      h: null, x: null, y: null, w: null, id: actual_dashboard.length + 1,
      type: typew, title: "Widget number " + (actual_dashboard.length + 1)
    }
    actual_dashboard.push(newwidget)
    analysisStore.set("current_dashboard", actual_dashboard)
  }
  public updateWidget(identifier, x, y, w, h) {
    let actual_dashboard = analysisStore.getValue("current_dashboard")
    var foundIndex = actual_dashboard.findIndex(x => x.id == identifier);
    var newwidget: widget = {
      h: h, x: x, y: y, w: w, id: identifier, type: actual_dashboard[foundIndex].type, title: actual_dashboard[foundIndex].title
    }
    actual_dashboard[foundIndex] = newwidget
    analysisStore.set("current_dashboard", actual_dashboard)
  }
}
