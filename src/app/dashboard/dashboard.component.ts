import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ToolsService } from '../services/tools.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards;
  items;
  fetched: boolean = false;
  constructor(public service: ToolsService, private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.service.getItems().pipe(map((res) => {
      const tools = [];
      for (const key in res) {
        if (res.hasOwnProperty(key)) {
          tools.push({ ...res[key] })
        }
      }
      return tools
    }))
      .subscribe((tools) => {
        this.items = tools
      });
    this.cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(() => {
        return this.items.map(card => {
          return { ...card, cols: 1, rows: 1 }
        })
      })
    )
    this.fetched = true
  }

  getlength() {
    return this.items.length
  }
}
