import { Component, OnInit } from "@angular/core";
import { GameDataService } from "../game-data.service";
import { TpPointsService } from "../tp-points.service";
import { TestData } from "./test-data";

@Component({
  selector: "app-tests",
  templateUrl: "./tests.component.html",
  styleUrls: ["./tests.component.css"],
})
export class TestsComponent implements OnInit {
  public tests: TestData[];

  constructor(private gameDataService: GameDataService, private tpPointsService: TpPointsService) { }

  public ngOnInit() {
    this.gameDataService.getTests()
      .subscribe((tests) => this.tests = tests);
  }
}
