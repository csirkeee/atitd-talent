import { Component, Input, OnInit } from "@angular/core";
import { PlayerDataService } from "../player-data.service";
import { SpecializationData } from "../specializations/spcialization-data";

@Component({
  selector: "app-specialization-available",
  templateUrl: "./specialization-available.component.html",
  styleUrls: ["./specialization-available.component.scss"],
})
export class SpecializationAvailableComponent {
  @Input() public specializationData: SpecializationData;

  constructor(public playerDataService: PlayerDataService) { }

  public addSpecialization() {
    this.playerDataService.addSpecialization(this.specializationData.id);
  }

}
