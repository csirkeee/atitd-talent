import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { StorageModule } from "@ngx-pwa/local-storage";
import { AppComponent } from "./app.component";
import { SpecializationAvailableComponent } from "./specialization-available/specialization-available.component";
import { SpecializationDetailComponent } from "./specialization-detail/specialization-detail.component";
import { SpecializationsComponent } from "./specializations/specializations.component";
import { StatsComponent } from "./stats/stats.component";
import { TestDetailComponent } from "./test-detail/test-detail.component";
import { TestExtraComponent } from "./test-extra/test-extra.component";
import { TestsComponent } from "./tests/tests.component";
import { ImportExportPanelComponent } from './import-export-panel/import-export-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    TestsComponent,
    SpecializationsComponent,
    StatsComponent,
    TestDetailComponent,
    SpecializationDetailComponent,
    SpecializationAvailableComponent,
    TestExtraComponent,
    ImportExportPanelComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    StorageModule.forRoot({ IDBNoWrap: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
