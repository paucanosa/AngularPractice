import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { StoreService} from './store.service'

@Injectable({
  providedIn: 'root'
})
export class widgetService {
  private notify = new Subject<any>();
  notifyObservable$ = this.notify.asObservable();
  constructor( private StoreService: StoreService) { }

  public addWidget(typew:string) {
      this.StoreService.addWidget(typew);
      this.notify.next(this.StoreService.currentWidgets);
  }
}
