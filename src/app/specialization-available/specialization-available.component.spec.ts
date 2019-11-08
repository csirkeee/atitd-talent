import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SpecializationAvailableComponent } from "./specialization-available.component";

describe("SpecializationAvailableComponent", () => {
  let component: SpecializationAvailableComponent;
  let fixture: ComponentFixture<SpecializationAvailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecializationAvailableComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializationAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
