import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { PlayerDataService } from "../player-data.service";
import { SpecializationData } from "../specializations/spcialization-data";
import { LevelBonus, StatsService } from "../stats.service";

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
export class SpecializationDetailComponent implements OnInit, OnDestroy {
  @Input() public specializationData: SpecializationData;

  public expanded = false;

  public level = 0;

  private subscriptions: Subscription[] = [];

  constructor(private playerDataService: PlayerDataService, private statsService: StatsService) { }

  public ngOnInit() {
    this.subscriptions.push(
      this.playerDataService.getSpecializationLevel(this.specializationData)
        .subscribe((level) => {
          this.level = level;
        }),
    );
  }

  public ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  get levelBonuses() { return LevelBonus; }

  public toggleExpanded() {
    this.expanded = !this.expanded;
  }

  public removeSpecialization() {
    this.playerDataService.removeSpecialization(this.specializationData.id);
  }

  public addLevel() {
    if(this.level < 32) {
      this.playerDataService.setSpecializationLevel(this.specializationData.id, this.level + 1);
    }
  }

  public removeLevel() {
    if(this.level > 0) {
      this.playerDataService.setSpecializationLevel(this.specializationData.id, this.level - 1);
    }
  }

  public toggleLevel(i: number) {
    if(this.level === i+1) {
      this.playerDataService.setSpecializationLevel(this.specializationData.id, i);
    } else {
      this.playerDataService.setSpecializationLevel(this.specializationData.id, i+1);
    }
  }

  public getLevelName(level: LevelBonus, i: number): string {
    switch(level) {
      case LevelBonus.PRIMARY_1:
        return this.specializationData.primaryStat1;
      case LevelBonus.PRIMARY_2:
        return this.specializationData.primaryStat2;
      case LevelBonus.SECONDARY:
        return this.specializationData.secondaryStat;
      case LevelBonus.PERK:
        return this.specializationData.perkOrder[Math.floor(i/4)];
    }
  }
}
