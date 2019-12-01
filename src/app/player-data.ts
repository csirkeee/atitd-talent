export class TestPass {
  public id: string;
  public passedTasks: string[];
}

export class SelectedSpecialization {
  public id: string;
  public level: number;
}

export class PlayerData {
  public passes: TestPass[] = [];
  public levels: SelectedSpecialization[] = [{id: "laborer", level: 0}];
  public extraTp?: number = 0;
}
