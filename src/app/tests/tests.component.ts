import {animate, state, style, transition, trigger} from "@angular/animations";
import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app-tests",
  animations: [
    trigger("bodyExpansion", [
      state("collapsed, void", style({height: "0px", visibility: 'hidden'})),
      state("expanded", style({height: "*", visibility: 'visible'})),
      transition("expanded <=> collapsed, void => collapsed",
        animate("225ms cubic-bezier(0.4,0.0,0.2,1)")),
    ]),
  ],
  templateUrl: "./tests.component.html",
  styleUrls: ["./tests.component.css"],
})
export class TestsComponent implements OnInit {
  private expanded = false;

  private toggleExpanded() {
    this.expanded = !this.expanded;
  }

  constructor() { }

  public ngOnInit() {
  }

}
