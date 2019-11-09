import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { GameDataService } from "../game-data.service";
import { PlayerDataService } from "../player-data.service";
import { TpPointsService } from "../tp-points.service";
import { SpecializationData } from "./spcialization-data";

@Component({
  selector: "app-specializations",
  templateUrl: "./specializations.component.html",
  styleUrls: ["./specializations.component.css"],
})
export class SpecializationsComponent implements OnInit, OnDestroy {
  public specializations: SpecializationData[];

  private subscriptions: Subscription[] = [];

  constructor(
    private gameDataService: GameDataService,
    private tpPointsService: TpPointsService,
  ) {
  }

  public ngOnInit() {
    this.subscriptions.push(this.gameDataService.getSpecializations()
      .subscribe((specializations) => this.specializations = specializations));
  }

  public ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
