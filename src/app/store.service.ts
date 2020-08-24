import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  currentWidgets = [{title:"The one and only widget",type:"line",id:1}]
  constructor() { }

  addWidget(typew:string)
  {
    this.currentWidgets.push({title:"Widget "+(this.currentWidgets.length+1) +" "+ typew+ " chart",type:typew, id: this.currentWidgets.length+1 })
  }
}
