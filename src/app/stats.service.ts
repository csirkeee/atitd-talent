import { Injectable } from "@angular/core";

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

  constructor() { }
}
