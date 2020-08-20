import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  currentWidgets = [{title:"The one and only widget",type:"line"}]
  constructor() { }

  addWidget(typew:string)
  {
    this.currentWidgets.push({title:"Widget "+(this.currentWidgets.length+1) +" "+ typew+ " chart",type:typew})
  }
}
