import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, Input, OnInit } from "@angular/core";
import { PlayerDataService } from "../player-data.service";
import { TaskData, TestData } from "../tests/test-data";

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
  styleUrls: ["./test-detail.component.css"],
})
export class TestDetailComponent implements OnInit {
  @Input() public testData: TestData;

  public expanded = false;

  public checked = new Set<string>();

  public gotTp = 0;
  public availableTp = 0;

  constructor(private playerDataService: PlayerDataService) { }

  public ngOnInit() {
    this.playerDataService.getPass(this.testData.id).subscribe((passes) => {
      passes.forEach((pass) => this.checked.add(pass));
      this.recalculate();
    });
  }

  public toggleExpanded() {
    this.expanded = !this.expanded;
  }

  public onCheck(task: TaskData) {
    if(this.checked.has(task.id)) {
      this.checked.delete(task.id);
    } else {
      this.checked.add(task.id);
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
  }
}
