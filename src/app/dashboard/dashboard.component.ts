import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { analysisStore } from '../analysis.store';
import { widget } from '../models/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() {
  }

  dashboard = analysisStore.select("current_dashboard")
  savedDashboard: widget[] = []

  ngOnInit() {
  }

  save_dashboard() {
    this.savedDashboard = [...analysisStore.getValue("current_dashboard")]
  }
  load_dashboard() {
    analysisStore.set('current_dashboard', this.savedDashboard)

  }

}
