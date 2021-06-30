import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { PlayerDataService } from "../player-data.service";
import { TaskData, TestData, TestType } from "../tests/test-data";
import { TpPointsService } from "../tp-points.service";

@Component({
  selector: "app-test-detail",
  animations: [
    trigger("bodyExpansion", [
      state("collapsed, void", style({ height: "0px", visibility: "hidden"})),
      state("expanded", style({ height: "*", visibility: "visible"})),
      transition("expanded <=> collapsed, void => collapsed",
        animate("225ms cubic-bezier(0.4,0.0,0.2,1)")),
    ]),
  ],
  templateUrl: "./test-detail.component.html",
  styleUrls: ["./test-detail.component.scss"],
})
export class TestDetailComponent implements OnInit, OnDestroy {
  @Input() public testData: TestData;

  public expanded = false;

  public checked = new Set<string>();

  public gotTp = 0;
  public availableTp = 0;

  private subscriptions: Subscription[] = [];

  constructor(private playerDataService: PlayerDataService, private tpPointsService: TpPointsService) { }

  public ngOnInit() {
    this.subscriptions.push(this.playerDataService.getPass(this.testData.id).subscribe((passes) => {
      this.checked.clear();
      passes.forEach((pass) => this.checked.add(pass));
      this.recalculate();
    }));
  }

  public ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  public toggleExpanded() {
    this.expanded = !this.expanded;
  }

  public onCheck(task: TaskData) {
    if(this.testData.type === TestType.RANDOM_ORDER) {
      if(this.checked.has(task.id)) {
        this.checked.delete(task.id);
      } else {
        this.checked.add(task.id);
      }
    } else { // this.testData.type === TestType.SERIAL
      const index = this.testData.tasks.findIndex((t) => t.id === task.id);

      if(this.checked.has(task.id)) {
        for(let i = index; i < this.testData.tasks.length; i += 1) {
          if(this.checked.has(this.testData.tasks[i].id)) {
            this.checked.delete(this.testData.tasks[i].id);
          }
        }
      } else {
        for(let i = 0; i <= index; i += 1) {
          if(!this.checked.has(this.testData.tasks[i].id)) {
            this.checked.add(this.testData.tasks[i].id);
          }
        }
      }
    }
    this.recalculate();

    this.playerDataService.setPass(this.testData.id, Array.from(this.checked.values()));
  }

  private recalculate() {
    let gotTpCalc = 0;
    let availableTpCalc = 0;
    for(const task of this.testData.tasks) {
      availableTpCalc += task.value;
      if(this.checked.has(task.id)) {
        gotTpCalc += task.value;
      }
    }
    this.gotTp = gotTpCalc;
    this.availableTp = availableTpCalc;
    this.tpPointsService.setTestPoints(this.testData.id, this.gotTp);
  }
}
