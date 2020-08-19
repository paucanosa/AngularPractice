import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {widgetService} from '../widget.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private AddwidgetService: widgetService ) { }
  ngOnInit(): void {
  }


  addWidget()
  {
    console.log("New widget");
    this.AddwidgetService.notifyOther();
  }

}
