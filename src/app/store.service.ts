import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  currentWidgets = [{title:"The one and only widget"}]
  constructor() { }

  addWidget()
  {
    this.currentWidgets.push({title:"Widget number "+(this.currentWidgets.length+1)})
  }
}
