import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TpPointsService {
  private testPoints = new Map<string, number>();
  private receivedPoints = new BehaviorSubject<number>(0);
  private specializationLevels = new Map<string, number>();
  private spentPoints = new BehaviorSubject<number>(0);

  private readonly specializationLevelCosts =
    [1, 1, 1, 2, 1, 1, 1, 3, 2, 2, 2, 4, 2, 2, 2, 5, 3, 3, 3, 6, 3, 3, 3, 7, 4, 4, 4, 8, 4, 4, 4, 9];
  private readonly specializationBuyCosts =
    [0, 0, 2, 4, 8, 16, 32, 64];

  constructor() { }

  public getReceivedPoints(): Observable<number> {
    return this.receivedPoints;
  }

  public getSpentPoints(): Observable<number> {
    return this.spentPoints;
  }

  public setTestPoints(testId: string, points: number) {
    this.testPoints.set(testId, points);
    this.recalculate();
  }

  private recalculate() {
    this.receivedPoints.next([...this.testPoints.values()].reduce((a, b) => a+b, 0));
    let spentPoints = this.specializationBuyCosts.slice(0, this.specializationLevels.size).reduce((a, b) => a+b, 0);
    this.specializationLevels.forEach((level) => {
      spentPoints += this.specializationLevelCosts.slice(0, level).reduce((a, b) => a+b, 0);
    });
    this.spentPoints.next(spentPoints);
  }
}
