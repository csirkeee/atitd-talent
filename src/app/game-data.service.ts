import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";

import ATITD_DATA from "../assets/atitd-data";
import { SpecializationData } from "./specializations/spcialization-data";
import { TestData } from "./tests/test-data";

@Injectable({
  providedIn: "root",
})
export class GameDataService {

  constructor() { }

  public getTests(): Observable<TestData[]> {
    return of(ATITD_DATA.tests);
  }

  public getSpecializations(): Observable<SpecializationData[]> {
    return of(ATITD_DATA.specializations);
  }
}
