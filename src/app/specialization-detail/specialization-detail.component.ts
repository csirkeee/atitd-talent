import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, Input, OnInit } from "@angular/core";
import { PlayerDataService } from "../player-data.service";
import { SpecializationData } from "../specializations/spcialization-data";

@Component({
  selector: "app-specialization-detail",
  animations: [
    trigger("bodyExpansion", [
      state("collapsed, void", style({ height: "0px", visibility: "hidden"})),
      state("expanded", style({ height: "*", visibility: "visible"})),
      transition("expanded <=> collapsed, void => collapsed",
        animate("225ms cubic-bezier(0.4,0.0,0.2,1)")),
    ]),
  ],
  templateUrl: "./specialization-detail.component.html",
  styleUrls: ["./specialization-detail.component.css"],
})
export class SpecializationDetailComponent implements OnInit {
  @Input() public specializationData: SpecializationData;

  public expanded = false;

  public level = 0;

  constructor(private playerDataService: PlayerDataService) { }

  public ngOnInit() {
  }

  public toggleExpanded() {
    this.expanded = !this.expanded;
  }

  public removeSpecialization() {
    this.playerDataService.removeSpecialization(this.specializationData.id);
  }

}
