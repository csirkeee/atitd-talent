import { Injectable } from "@angular/core";
import { StorageMap } from "@ngx-pwa/local-storage";
import { BehaviorSubject, Observable, of, ReplaySubject, Subject } from "rxjs";
import { catchError, debounceTime, distinctUntilChanged, map, switchMap } from "rxjs/operators";
import { PlayerData, SelectedSpecialization, TestPass } from "./player-data";
import { SpecializationData } from "./specializations/spcialization-data";

@Injectable({
  providedIn: "root",
})
export class PlayerDataService {
  private playerData = new BehaviorSubject<PlayerData>(new PlayerData());

  private inited = false;

  private dataToSave = new Subject<PlayerData>();

  constructor(private storage: StorageMap) {
    this.storage.get("atitd-player-data").pipe(
      catchError(() => of(new PlayerData())),
    ).subscribe((result: PlayerData) => {
      if(result) {
        if(!result.extraTp) {
          result.extraTp = 0;
        }
        this.playerData.next(result);
      } else {
        this.playerData.next(new PlayerData());
      }
      this.inited = true;
    });

    this.dataToSave.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // switch to new search observable each time the term changes
      switchMap((data: PlayerData) => this.storage.set("atitd-player-data", data)),
    ).subscribe();
  }

  public getPass(test: string): Observable<string[]> {
    return this.playerData.pipe(map((data) => {
      for(const pass of data.passes) {
        if(pass.id === test) {
          return pass.passedTasks;
        }
      }
      return [];
    }));
  }

  public setPass(test: string, passedTasks: string[]) {
    if(this.inited) {
      const currentData = this.playerData.getValue();
      let changed = false;
      for(const pass of currentData.passes) {
        if(pass.id === test) {
          pass.passedTasks = passedTasks;
          changed = true;
          break;
        }
      }
      if(!changed) {
        currentData.passes.push({
          id: test,
          passedTasks,
        });
      }
      this.playerData.next(currentData);
      this.dataToSave.next(currentData);
    }
  }

  public getExtraTp(): Observable<number> {
    return this.playerData.pipe(map((data) => {
      return data.extraTp;
    }));
  }

  public addExtraTp(amount: number) {
    if(this.inited) {
      const currentData = this.playerData.getValue();
      if(currentData.extraTp < 1000) {
        currentData.extraTp = Math.min(1000, currentData.extraTp + amount);
        this.playerData.next(currentData);
        this.dataToSave.next(currentData);
      }
    }
  }

  public removeExtraTp(amount: number) {
    if(this.inited) {
      const currentData = this.playerData.getValue();
      if(currentData.extraTp) {
        currentData.extraTp = Math.max(0, currentData.extraTp - amount);
        this.playerData.next(currentData);
        this.dataToSave.next(currentData);
      }
    }
  }

  public addSpecialization(id: string) {
    if(this.inited) {
      const currentData = this.playerData.getValue();
      if(currentData.levels.length < 8) {
        currentData.levels.push({id, level: 0});
        this.playerData.next(currentData);
        this.dataToSave.next(currentData);
      }
    }
  }

  public removeSpecialization(id: string) {
    if(this.inited) {
      const currentData = this.playerData.getValue();
      currentData.levels = currentData.levels.filter((l) => l.id !== id);
      this.playerData.next(currentData);
      this.dataToSave.next(currentData);
    }
  }

  public setSpecializationLevel(id: string, level: number) {
    if(this.inited) {
      const currentData = this.playerData.getValue();
      currentData.levels.forEach((l) => {
        if(l.id === id) {
          l.level = level;
        }
      });
      this.playerData.next(currentData);
      this.dataToSave.next(currentData);
    }
  }

  public getLevels(): Observable<SelectedSpecialization[]> {
    return this.playerData.pipe(map((data) => data.levels));
  }

  public isSpecializationSelected(specialization: SpecializationData): Observable<boolean> {
    return this.getLevels().pipe(map((levels) => {
      for(const level of levels) {
        if(level.id === specialization.id) {
          return true;
        }
      }
      return false;
    }));
  }

  public getSpecializationLevel(specialization: SpecializationData): Observable<number | undefined> {
    return this.getLevels().pipe(map((levels) => {
      for(const level of levels) {
        if(level.id === specialization.id) {
          return level.level;
        }
      }
    }));
  }
}
