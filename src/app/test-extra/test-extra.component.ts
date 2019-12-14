import { Component, OnInit } from "@angular/core";
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { PlayerDataService } from "../player-data.service";

@Component({
  selector: "app-test-extra",
  templateUrl: "./test-extra.component.html",
  styleUrls: [
    "../test-detail/test-detail.component.css",
    "./test-extra.component.css",
  ],
})
export class TestExtraComponent implements OnInit {

  private mouseUp = new Subject<void>();

  constructor(public playerDataService: PlayerDataService) { }

  public ngOnInit() {
  }

  public plusMinusUp() {
    this.mouseUp.next();
  }

  public plusDown() {
    this.playerDataService.addExtraTp(1);
    interval(250).pipe(
      takeUntil(this.mouseUp),
    ).subscribe((tick: number) => {
      if(tick < 9) {
        this.playerDataService.addExtraTp(1);
      } else if(tick < 18) {
        this.playerDataService.addExtraTp(10);
      } else {
        this.playerDataService.addExtraTp(100);
      }
    });
  }

  public minusDown() {
    this.playerDataService.removeExtraTp(1);
    interval(250).pipe(
      takeUntil(this.mouseUp),
    ).subscribe((tick: number) => {
      if(tick < 9) {
        this.playerDataService.removeExtraTp(1);
      } else if(tick < 18) {
        this.playerDataService.removeExtraTp(10);
      } else {
        this.playerDataService.removeExtraTp(100);
      }
    });
  }

}
