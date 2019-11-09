import { Component, Input, OnInit } from "@angular/core";
import { PlayerDataService } from "../player-data.service";
import { SpecializationData } from "../specializations/spcialization-data";

@Component({
  selector: "app-specialization-available",
  templateUrl: "./specialization-available.component.html",
  styleUrls: ["./specialization-available.component.css"],
})
export class SpecializationAvailableComponent implements OnInit {
  @Input() public specializationData: SpecializationData;

  constructor(private playerDataService: PlayerDataService) { }

  public ngOnInit() {
  }

  public addSpecialization() {
    this.playerDataService.addSpecialization(this.specializationData.id);
  }

}
