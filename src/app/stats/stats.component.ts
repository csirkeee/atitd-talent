import { Component, Input, OnInit } from "@angular/core";
import { StatData } from "../stat-data";
import { TpPointsService } from "../tp-points.service";

@Component({
  selector: "app-stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.scss"],
})
export class StatsComponent {
  @Input() public statData: StatData;

  constructor(public tpPointsService: TpPointsService) { }
}
