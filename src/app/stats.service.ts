import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { GameDataService } from "./game-data.service";
import { SelectedSpecialization } from "./player-data";
import { PlayerDataService } from "./player-data.service";
import { PerkData, SpecializationData } from "./specializations/spcialization-data";
import { StatData } from "./stat-data";

export enum LevelBonus {
  PRIMARY_1, PRIMARY_2, SECONDARY, PERK,
}

@Injectable({
  providedIn: "root",
})
export class StatsService {
  public readonly LEVEL_BONUSES: LevelBonus[] =
    [
      LevelBonus.PRIMARY_1, LevelBonus.PRIMARY_2, LevelBonus.SECONDARY, LevelBonus.PERK,
      LevelBonus.PRIMARY_1, LevelBonus.PRIMARY_2, LevelBonus.PRIMARY_1, LevelBonus.PERK,
      LevelBonus.PRIMARY_1, LevelBonus.PRIMARY_2, LevelBonus.SECONDARY, LevelBonus.PERK,
      LevelBonus.PRIMARY_1, LevelBonus.PRIMARY_2, LevelBonus.PRIMARY_2, LevelBonus.PERK,
      LevelBonus.PRIMARY_1, LevelBonus.PRIMARY_2, LevelBonus.SECONDARY, LevelBonus.PERK,
      LevelBonus.PRIMARY_1, LevelBonus.PRIMARY_2, LevelBonus.PRIMARY_1, LevelBonus.PERK,
      LevelBonus.PRIMARY_1, LevelBonus.PRIMARY_2, LevelBonus.SECONDARY, LevelBonus.PERK,
      LevelBonus.PRIMARY_1, LevelBonus.PRIMARY_2, LevelBonus.PRIMARY_2, LevelBonus.PERK,
    ];

  public readonly STATS = ["str", "dex", "end", "spd", "con", "foc", "per"];
  public readonly STAT_NAMES = ["str", "dex", "end", "spd", "con", "foc", "per"];

  private statData = new BehaviorSubject<StatData>(new StatData());

  private specializations: SpecializationData[];

  constructor(private gameDataService: GameDataService, private playerDataService: PlayerDataService) {
    this.gameDataService.getSpecializations()
      .subscribe((specializations) => this.specializations = specializations);
    this.playerDataService.getLevels().subscribe((levels) => this.recalculate(levels));
  }

  public getStatData(): Observable<StatData> {
    return this.statData;
  }

  public findPerk(id: string): PerkData {
    for(const specialization of this.specializations) {
      for(const perk of specialization.perks) {
        if(perk.id === id) {
          return perk;
        }
      }
    }
  }

  private findSpecialization(id: string): SpecializationData {
    for(const specialization of this.specializations) {
      if(specialization.id === id) {
        return specialization;
      }
    }
  }

  private recalculate(levels: SelectedSpecialization[]) {
    if(this.specializations) {
      const statCounter = new Map<string, number>();
      const perkCounter = new Map<string, number>();

      for(const stat of this.STATS) {
        statCounter.set(stat, 0);
      }

      for(const level of levels) {
        const specializationData = this.findSpecialization(level.id);

        for(let i = 0; i < level.level; i += 1) {
          const bonus = this.LEVEL_BONUSES[i];

          switch(bonus) {
            case LevelBonus.PRIMARY_1:
              statCounter.set(specializationData.primaryStat1, statCounter.get(specializationData.primaryStat1) + 1);
              break;
            case LevelBonus.PRIMARY_2:
              statCounter.set(specializationData.primaryStat2, statCounter.get(specializationData.primaryStat2) + 1);
              break;
            case LevelBonus.SECONDARY:
              statCounter.set(specializationData.secondaryStat, statCounter.get(specializationData.secondaryStat) + 1);
              break;
            case LevelBonus.PERK:
              const perkId = specializationData.perkOrder[Math.floor(i/4)];
              if(perkCounter.has(perkId)) {
                perkCounter.set(perkId, perkCounter.get(perkId) + 1);
              } else {
                perkCounter.set(perkId, 1);
              }
              break;
          }
        }
      }

      const statData = new StatData();
      for(let i = 0; i < this.STATS.length; i += 1) {
        statData.attributes.push({id: this.STATS[i], name: this.STAT_NAMES[i], value: statCounter.get(this.STATS[i])});
      }

      for(const perkId of perkCounter.keys()) {
        statData.perks.push({id: perkId, perkData: this.findPerk(perkId), times: perkCounter.get(perkId)});
      }

      statData.perks.sort((a, b) => a.perkData.name.localeCompare(b.perkData.name));

      this.statData.next(statData);
    }
  }
}
