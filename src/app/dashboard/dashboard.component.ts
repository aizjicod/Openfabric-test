import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ToolsService } from '../services/tools.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards;
  items;
  constructor(service: ToolsService, private breakpointObserver: BreakpointObserver) {
    this.items = service.getItems();
    this.cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(() => {
        return this.items.map(card => {
          return { ...card, cols: 1, rows: 1 }
        })
      })
    )
  }

  getlength() {
    return this.items.length
  }
}
