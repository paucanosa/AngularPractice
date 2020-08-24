import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { StoreService} from './store.service'
import {AreaOptions} from './charts/areachart'
import {LineOptions} from './charts/linechart'
import {BarOptions} from './charts/barchart'
import {PieOptions}from './charts/piechart'
export {charOpt}
var charOpt: { [id: string] : Object; } = {};
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

  constructor( private StoreService: StoreService) { }

  ngOnInit() {
  }

  public addWidget(typew:string) {
      this.StoreService.addWidget(typew);
      this.notify.next(this.StoreService.currentDashboard);
  }
  public updateWidget(identifier,x,y,w,h,posx,posy)
  {
    this.StoreService.updateWidget(identifier,x,y,w,h,posx,posy);
    this.notify.next(this.StoreService.currentDashboard)
  }
  public saveDashboard()
  {
    this.StoreService.saveDashboard()
  }
  public loadDashboard()
  {
    this.StoreService.loadDashboard()
    this.notify.next(this.StoreService.currentDashboard)
  }
}
