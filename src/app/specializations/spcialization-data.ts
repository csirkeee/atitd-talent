export class PerkData {
  public id: string;
  public name: string;
  public description: string;
}

export class SpecializationData {
  public id: string;
  public name: string;
  public primaryStat1: string;
  public primaryStat2: string;
  public secondaryStat: string;
  public perks: PerkData[];
  public perkOrder: string[];
}
