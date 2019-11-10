import { PerkData } from "./specializations/spcialization-data";

export class Attribute {
  public id: string;
  public name: string;
  public value: number;
}

export class PerkValue {
  public id: string;
  public perkData: PerkData;
  public times: number;
}

export class StatData {
  public attributes: Attribute[] = [];
  public perks: PerkValue[] = [];
}
