import { Injectable } from "@angular/core";
import { StorageMap } from "@ngx-pwa/local-storage";
import { Observable, of, ReplaySubject, Subject } from "rxjs";
import { catchError, debounceTime, distinctUntilChanged, map, switchMap } from "rxjs/operators";
import { PlayerData, TestPass } from "./player-data";

@Injectable({
  providedIn: "root",
})
export class PlayerDataService {
  private playerData = new ReplaySubject<PlayerData>(1);

  private dataToSave = new Subject<PlayerData>();

  constructor(private storage: StorageMap) {
    this.storage.get("atitd-player-data").pipe(
      catchError(() => of({passes: []})),
    ).subscribe((result: PlayerData) => {
      if(result) {
        this.playerData.next(result);
      } else {
        this.playerData.next({passes: []});
      }
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
    return this.playerData.subscribe((data) => {
      let changed = false;
      for(const pass of data.passes) {
        if(pass.id === test) {
          pass.passedTasks = passedTasks;
          changed = true;
          break;
        }
      }
      if(!changed) {
        data.passes.push({
          id: test,
          passedTasks,
        });
      }
      console.log(JSON.stringify(data));
      this.dataToSave.next(data);
    }).unsubscribe();
  }
}
