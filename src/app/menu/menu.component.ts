import { Component, OnInit} from '@angular/core';
import { widgetService } from '../widget.service';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  constructor(private widgetService: widgetService) { }
  ngOnInit(): void { }

  typeselected = "area"
  types = ["pie", "line", "area", "bar"]

  addWidget() {
    this.widgetService.addWidget(this.typeselected);
  }

}
