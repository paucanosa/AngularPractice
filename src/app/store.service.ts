import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  currentDashboard = [{title:"The one and only widget",type:"line",id:1,x:1,y:0,w:1,h:1,posx:0,posy:0}]
  lastsavedDashboard = [{title:"The one and only widget",type:"line",id:1,x:1,y:0,w:3,h:1,posx:0,posy:0}]

  constructor() { }

  addWidget(typew:string)
  {
    this.currentDashboard.push({title:"Widget "+(this.currentDashboard.length+1) +" "+ typew+ " chart",type:typew, id: this.currentDashboard.length+1,x:1,y:0,w:3,h:1,posx:0,posy:0 })
  }
  public updateWidget(identifier,x,y,w,h,posx,posy)
  {
    this.currentDashboard.find(x => x.id=identifier).x = x
    this.currentDashboard.find(x => x.id=identifier).y = y
    this.currentDashboard.find(x => x.id=identifier).w = w
    this.currentDashboard.find(x => x.id=identifier).h = h
    this.currentDashboard.find(x => x.id=identifier).posx = posx
    this.currentDashboard.find(x=> x.id=identifier).posy = posy
  }
  public saveDashboard()
  {
    this.lastsavedDashboard = this.currentDashboard
    console.log("Saved Dashboard")
    console.log(this.lastsavedDashboard)
  }
  public loadDashboard()
  {
    console.log("Saved Dashboard")
    console.log(this.lastsavedDashboard)
    //this.currentDashboard = this.savedDashboard
    //console.log("Current Dashboard")
    ///console.log(this.currentDashboard)
  }

}
