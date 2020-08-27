import { Component, OnInit } from '@angular/core';
import { widgetService } from '../widget.service';
import { Subscription } from 'rxjs';
import { analysisStore } from '../analysis.store';
import { widget } from '../models/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private widgetService: widgetService) {
  }

  private subscription: Subscription
  currentDashboard: widget[] = []
  savedDashboard: widget[] = []

  ngOnInit() {
    this.subscription = analysisStore.select("current_dashboard").subscribe((res) => {
      this.currentDashboard = res
    });
  }
  save_dashboard() {
    let new_saved_dashboard = []
    this.currentDashboard.forEach(widget => new_saved_dashboard.push(Object.assign({}, widget)))
    this.savedDashboard = new_saved_dashboard
  }
  load_dashboard() {
    let new_dashboard = []
    this.savedDashboard.forEach(widget => new_dashboard.push(Object.assign({}, widget)))
    this.currentDashboard = new_dashboard
    analysisStore.set('current_dashboard', this.currentDashboard)
  }

}
