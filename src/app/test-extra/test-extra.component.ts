import { Component, OnInit } from "@angular/core";
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

  constructor(public playerDataService: PlayerDataService) { }

  public ngOnInit() {
  }

  public addExtra() {
    this.playerDataService.addExtraTp();
  }

  public removeExtra() {
    this.playerDataService.removeExtraTp();
  }

}
