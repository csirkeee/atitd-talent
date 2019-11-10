import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { GameDataService } from "../game-data.service";
import { TpPointsService } from "../tp-points.service";
import { TestData } from "./test-data";

@Component({
  selector: "app-tests",
  templateUrl: "./tests.component.html",
  styleUrls: ["./tests.component.css"],
})
export class TestsComponent implements OnInit, OnDestroy {
  public tests: TestData[];

  private subscriptions: Subscription[] = [];

  constructor(private gameDataService: GameDataService, public tpPointsService: TpPointsService) { }

  public ngOnInit() {
    this.subscriptions.push(this.gameDataService.getTests()
      .subscribe((tests) => this.tests = tests));
  }

  public ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
