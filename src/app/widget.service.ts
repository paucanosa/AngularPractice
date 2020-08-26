import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { StoreService } from './store.service'
import { AreaOptions } from './charts/areachart'
import { LineOptions } from './charts/linechart'
import { BarOptions } from './charts/barchart'
import { PieOptions } from './charts/piechart'
import { widget } from './store.service'
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
  private notify = new Subject<any>();

  notifyObservable$ = this.notify.asObservable();

  constructor(private StoreService: StoreService) { }

  ngOnInit() {
  }

  public addWidget(typew: string) {
    var newwidget: widget = {
      h: null,
      x: null,
      y: null,
      w: null,
      id: this.StoreService.currentDashboard.length + 1,
      type: typew, title: "Widget number " + (this.StoreService.currentDashboard.length + 1)
    }
    var new_dashboard = this.StoreService.currentDashboard
    new_dashboard.push(newwidget)
    this.StoreService.addWidget(new_dashboard);
    this.notify.next(this.StoreService.currentDashboard);
  }
  public updateWidget(identifier, x, y, w, h) {
    var foundIndex = this.StoreService.currentDashboard.findIndex(x => x.id == identifier);
    var newwidget: widget = {
      h: h, x: x, y: y, w: w, id: identifier, type: this.StoreService.currentDashboard[foundIndex].type, title: this.StoreService.currentDashboard[foundIndex].title
    }
    this.StoreService.updateWidget(identifier, newwidget);
    this.notify.next(this.StoreService.currentDashboard)
  }
}
