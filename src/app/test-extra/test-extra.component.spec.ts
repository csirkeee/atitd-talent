import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TestExtraComponent } from "./test-extra.component";

describe("TestExtraComponent", () => {
  let component: TestExtraComponent;
  let fixture: ComponentFixture<TestExtraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestExtraComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
