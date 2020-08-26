
import { Component, OnInit} from '@angular/core';
import { widgetService } from '../widget.service';
import { Subscription} from 'rxjs';
import { StoreService } from '../store.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private widgetService: widgetService, private StoreService: StoreService) {
  }

  private subscription: Subscription;
  currentDashboard = []
  savedDashboard = []

  ngOnInit() {
    this.subscription = this.widgetService.notifyObservable$.subscribe((res) => {
      this.currentDashboard = res
      // console.log(res)
    });
  }
  save_dashboard() {
    this.savedDashboard = []
    this.currentDashboard.forEach(widget => this.savedDashboard.push(Object.assign({}, widget)))
  }
  load_dashboard() {
    this.currentDashboard = []
    this.savedDashboard.forEach(widget => this.currentDashboard.push(Object.assign({}, widget)))
    this.StoreService.replaceDashboard(this.currentDashboard)
  }

}
