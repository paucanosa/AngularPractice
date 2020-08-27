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
  private subscription: Subscription
  currentDashboard: widget[];
  constructor() {
   }

  ngOnInit() {
    this.subscription = analysisStore.select("current_dashboard").subscribe((res) => {
      this.currentDashboard = res
    });
  }

  public addWidget(typew: string) {
    var newwidget: widget = {
      h: null, x: null, y: null, w: null, id: this.currentDashboard.length + 1,
      type: typew, title: "Widget number " + (this.currentDashboard.length + 1)
    }
    this.currentDashboard.push(newwidget)
    analysisStore.set("current_dashboard", this.currentDashboard)
  }
  public updateWidget(identifier, x, y, w, h) {
    var foundIndex = this.currentDashboard.findIndex(x => x.id == identifier);
    var newwidget: widget = {
      h: h, x: x, y: y, w: w, id: identifier, type: this.currentDashboard[foundIndex].type, title: this.currentDashboard[foundIndex].title
    }
    this.currentDashboard[foundIndex] = newwidget
    analysisStore.set("current_dashboard", this.currentDashboard)
  }
}
