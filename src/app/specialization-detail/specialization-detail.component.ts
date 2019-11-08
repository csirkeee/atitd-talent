import { Component, Input, OnInit } from "@angular/core";
import { SpecializationData } from "../specializations/spcialization-data";

@Component({
  selector: "app-specialization-detail",
  templateUrl: "./specialization-detail.component.html",
  styleUrls: ["./specialization-detail.component.css"],
})
export class SpecializationDetailComponent implements OnInit {
  @Input() public specializationData: SpecializationData;

  constructor() { }

  public ngOnInit() {
  }

}
