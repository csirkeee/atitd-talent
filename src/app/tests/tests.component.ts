import { Component, OnInit } from "@angular/core";
import { TestData } from "./test-data";

@Component({
  selector: "app-tests",
  templateUrl: "./tests.component.html",
  styleUrls: ["./tests.component.css"],
})
export class TestsComponent implements OnInit {
  private tests: TestData[] = [
    {
      id: "alignment",
      name: "Astrological Alignment",
      imageLocation: "assets\\images\\tests\\Worship_Test_Icons_Astro_Alignment.png",
      tasks: [
        {
          id: "found5",
          text: "Found 5 aligned people",
          value: 1,
        },
        {
          id: "found15",
          text: "Found 15 aligned people",
          value: 1,
        },
        {
          id: "found30",
          text: "Found 30 aligned people",
          value: 1,
        },
        {
          id: "found45",
          text: "Found 45 aligned people",
          value: 1,
        },
        {
          id: "ritual",
          text: "Completed ritual",
          value: 3,
        },
      ],
    },
    {
      id: "obelisk",
      name: "Obelisk",
      imageLocation: "assets\\images\\tests\\Architecture_Test_Icons_Test_Obelisk.png",
      tasks: [
        {
          id: "desert",
          text: "Built and held a Desert Obelisk",
          value: 1,
        },
        {
          id: "cutstone",
          text: "Built and held a Cut stone Obelisk",
          value: 1,
        },
        {
          id: "metallic",
          text: "Built and held a Metallic Obelisk",
          value: 1,
        },
        {
          id: "hardwood",
          text: "Built and held a Hardwood Obelisk",
          value: 1,
        },
        {
          id: "marble",
          text: "Built and held a Marble Obelisk",
          value: 1,
        },
        {
          id: "crystal",
          text: "Built and held a Crystal Obelisk",
          value: 1,
        },
        {
          id: "heavenly",
          text: "Built and held a Heavenly Obelisk",
          value: 1,
        },
      ],
    },
  ];

  constructor() { }

  public ngOnInit() {
  }
}
