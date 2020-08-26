import { Injectable } from '@angular/core';
export interface widget {
  title: string
  type: string
  id: number
  x: number
  y: number
  w: number
  h: number
  pos_x?: number
  pos_y?: number
}
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  currentDashboard = []

  constructor() { }

  addWidget(new_dashboard: Array<widget>) {
    this.currentDashboard = new_dashboard
  }
  updateWidget(identifier, widget: widget) {
    var foundIndex = this.currentDashboard.findIndex(x => x.id == identifier);
    this.currentDashboard[foundIndex].x = widget.x
    this.currentDashboard[foundIndex].y = widget.y
    this.currentDashboard[foundIndex].w = widget.w
    this.currentDashboard[foundIndex].h = widget.h

  }
  replaceDashboard(new_dashboard: Array<widget>) {
    this.currentDashboard = new_dashboard
  }
  ngOnInit() {
  }

}
