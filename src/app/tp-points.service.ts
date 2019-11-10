import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { SelectedSpecialization } from "./player-data";
import { PlayerDataService } from "./player-data.service";

@Injectable({
  providedIn: "root",
})
export class TpPointsService {
  private testPoints = new Map<string, number>();
  private receivedPoints = new BehaviorSubject<number>(0);
  private specializationLevels: SelectedSpecialization[] = [];
  private spentPoints = new BehaviorSubject<number>(0);
  private remainingPoints = new BehaviorSubject<number>(0);

  private readonly specializationLevelCosts =
    [1, 1, 1, 2, 1, 1, 1, 3, 2, 2, 2, 4, 2, 2, 2, 5, 3, 3, 3, 6, 3, 3, 3, 7, 4, 4, 4, 8, 4, 4, 4, 9];
  private readonly specializationBuyCosts =
    [0, 0, 2, 4, 8, 16, 32, 64];

  constructor(private playerDataService: PlayerDataService) {
    playerDataService.getLevels().subscribe((levels) => {
      this.specializationLevels = levels;
      this.recalculate();
    });
  }

  public getReceivedPoints(): Observable<number> {
    return this.receivedPoints;
  }

  public getSpentPoints(): Observable<number> {
    return this.spentPoints;
  }

  public getRemainingPoints(): Observable<number> {
    return this.remainingPoints;
  }

  public setTestPoints(testId: string, points: number) {
    this.testPoints.set(testId, points);
    this.recalculate();
  }

  private recalculate() {
    const receivedPoints = [...this.testPoints.values()].reduce((a, b) => a+b, 0);
    this.receivedPoints.next(receivedPoints);
    let spentPoints = this.specializationBuyCosts.slice(0, this.specializationLevels.length).reduce((a, b) => a+b, 0);
    this.specializationLevels.forEach((level) => {
      spentPoints += this.specializationLevelCosts.slice(0, level.level).reduce((a, b) => a+b, 0);
    });
    this.spentPoints.next(spentPoints);
    this.remainingPoints.next(receivedPoints - spentPoints);
  }
}
