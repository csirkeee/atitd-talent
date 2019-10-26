import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { SpecializationsComponent } from "./specializations/specializations.component";
import { StatsComponent } from "./stats/stats.component";
import { TestsComponent } from "./tests/tests.component";

@NgModule({
  declarations: [
    AppComponent,
    TestsComponent,
    SpecializationsComponent,
    StatsComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
