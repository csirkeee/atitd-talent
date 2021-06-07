import { Component } from '@angular/core';
import { StatsService } from "./stats.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'talent';

  constructor(public statsService: StatsService) { }
}
