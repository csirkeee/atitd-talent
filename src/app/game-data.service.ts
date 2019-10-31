import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";

import ATITD_DATA from "../assets/atitd-data";
import { TestData } from "./tests/test-data";

@Injectable({
  providedIn: "root",
})
export class GameDataService {

  constructor() { }

  public getTests(): Observable<TestData[]> {
    return of(ATITD_DATA.tests);
  }
}
