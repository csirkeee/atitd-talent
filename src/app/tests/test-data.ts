export class TaskData {
  public id: string;
  public text: string;
  public value: number;
}

export enum TestType {
  SERIAL, RANDOM_ORDER,
}

export class TestData {
  public id: string;
  public name: string;
  public imageLocation: string;
  public type: TestType;
  public tasks: TaskData[];
}
