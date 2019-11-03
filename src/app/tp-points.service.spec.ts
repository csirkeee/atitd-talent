import { TestBed } from "@angular/core/testing";

import { TpPointsService } from "./tp-points.service";

describe("TpPointsService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: TpPointsService = TestBed.get(TpPointsService);
    expect(service).toBeTruthy();
  });
});
