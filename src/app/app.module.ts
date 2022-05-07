import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ResultsComponent } from './components/results/results.component';
import { CreateResultComponent } from './components/create-result/create-result.component';
import { LeagueTableComponent } from './components/league-table/league-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateResultFormComponent } from './components/create-result-form/create-result-form.component';
import { EditResultComponent } from './components/edit-result/edit-result.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    CreateResultComponent,
    LeagueTableComponent,
    CreateResultFormComponent,
    EditResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
