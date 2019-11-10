import { Component, Input, OnInit } from "@angular/core";
import { StatData } from "../stat-data";
import { TpPointsService } from "../tp-points.service";

@Component({
  selector: "app-stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.css"],
})
export class StatsComponent implements OnInit {
  @Input() public statData: StatData;

  constructor(private tpPointsService: TpPointsService) { }

  public ngOnInit() {
  }

}
