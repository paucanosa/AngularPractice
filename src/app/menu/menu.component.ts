import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {widgetService} from '../widget.service';
import { Dictionary } from 'highcharts';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  
  constructor(private AddwidgetService: widgetService ) { }
  ngOnInit(): void {
    
  }
  typeselected="pie" 
  types=["pie","line","area","bar"]
  addWidget()
  {
    console.log("New widget with type " + this.typeselected);
    this.AddwidgetService.addWidget(this.typeselected);
  }

}
