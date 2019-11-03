import { Injectable } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TpPointsService {
  private testPoints = new Map<string, number>();
  private receivedPoints = new ReplaySubject<number>();

  constructor() { }

  public getReceivedPoints(): Observable<number> {
    return this.receivedPoints;
  }

  public setTestPoints(testId: string, points: number) {
    this.testPoints.set(testId, points);
    this.recalculate();
  }

  private recalculate() {
    this.receivedPoints.next([...this.testPoints.values()].reduce((a, b) => a+b, 0));
  }
}
