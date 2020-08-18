import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddwidgetService {
  private notify = new Subject<any>();
  
  notifyObservable$ = this.notify.asObservable();
  constructor() { }

  public notifyOther() {
      this.notify.next();
  }
}
