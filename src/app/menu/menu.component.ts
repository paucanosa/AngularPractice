import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {AddwidgetService} from '../addwidget.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private AddwidgetService: AddwidgetService ) { }
  ngOnInit(): void {
  }


  addWidget()
  {
    console.log("New widget");
    this.AddwidgetService.notifyOther();
  }

}
