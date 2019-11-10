import { Component } from "@angular/core";
import { StatsService } from "./stats.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public title = "talent";

  constructor(private statsService: StatsService) { }
}
