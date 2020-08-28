import { Component, OnInit} from '@angular/core';
import { analysisStore } from '../analysis.store';
import { widget } from '../models/interfaces';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboard: Observable<widget[]> = analysisStore.select("current_dashboard").pipe(debounceTime(3000))
  savedDashboard: widget[] = []

  constructor() {
  }

  ngOnInit() {
  }

  save_dashboard() {
    this.savedDashboard = [...analysisStore.getValue("current_dashboard")]
    console.log(this.savedDashboard)
  }
  load_dashboard() {
    analysisStore.set('current_dashboard', this.savedDashboard)
    console.log(this.savedDashboard)

  }

}
