import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  currentDashboard = [{title:"The one and only widget",type:"line",id:1}]
  currentDashboardFull = [{title:"The one and only widget",type:"line",id:1,x:1,y:0,w:1,h:1,posx:0,posy:0}]
  savedDashboard = [{title:"The one and only widget",type:"line",id:1,x:1,y:0,w:3,h:1,posx:0,posy:0}]

  constructor() { }

  addWidget(typew:string)
  {
    this.currentDashboardFull.push({title:"Widget "+(this.currentDashboard.length+1) +" "+ typew+ " chart",type:typew, id: this.currentDashboard.length+1,x:0,y:0,w:0,h:0,posx:0,posy:0 })
    this.currentDashboard.push({title:"Widget "+(this.currentDashboard.length+1) +" "+ typew+ " chart",type:typew, id: this.currentDashboard.length+1})
  }
  updateWidget(identifier,x,y,w,h,posx,posy)
  {
    var foundIndex = this.currentDashboardFull.findIndex(x=> x.id == identifier);
    this.currentDashboardFull[foundIndex].x = x
    this.currentDashboardFull[foundIndex].y = y
    this.currentDashboardFull[foundIndex].w = w
    this.currentDashboardFull[foundIndex].h = h
    this.currentDashboardFull[foundIndex].posx = posx
    this.currentDashboardFull[foundIndex].posy = posy

    console.log("Saved Dashboard")
    console.log(this.savedDashboard)
  }
  saveDashboard()
  {
    this.savedDashboard = []
    this.currentDashboardFull.forEach(val => this.savedDashboard.push(Object.assign({}, val)))
    console.log("Saved Dashboard")
    console.log(this.savedDashboard)
  }
  loadDashboard()
  {
    this.currentDashboard = []
    this.savedDashboard.forEach(val =>this.currentDashboard.push(Object.assign({}, val)))
  }

}
