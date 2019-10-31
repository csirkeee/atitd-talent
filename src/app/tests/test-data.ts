export class TaskData {
  public id: string;
  public text: string;
  public value: number;
}

export class TestData {
  public id: string;
  public name: string;
  public imageLocation: string;
  public tasks: TaskData[];
}
