import { Component, OnInit } from "@angular/core";
import { GameDataService } from "../game-data.service";
import { TpPointsService } from "../tp-points.service";
import { SpecializationData } from "./spcialization-data";

@Component({
  selector: "app-specializations",
  templateUrl: "./specializations.component.html",
  styleUrls: ["./specializations.component.css"],
})
export class SpecializationsComponent implements OnInit {
  public specializations: SpecializationData[];

  constructor(private gameDataService: GameDataService, private tpPointsService: TpPointsService) { }

  public ngOnInit() {
    this.gameDataService.getSpecializations()
      .subscribe((specializations) => this.specializations = specializations);
  }

}
