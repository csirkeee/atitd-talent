import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, Input, OnInit } from "@angular/core";
import { TestData } from "../tests/test-data";

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

  private expanded = false;

  constructor() { }

  public ngOnInit() {
  }

  private toggleExpanded() {
    this.expanded = !this.expanded;
  }
}
