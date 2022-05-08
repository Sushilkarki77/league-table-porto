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
import { StoreModule } from '@ngrx/store';
import { resultReducer } from './state/results.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { storageMetaReducer } from './state/store.metareducer';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    CreateResultComponent,
    LeagueTableComponent,
    CreateResultFormComponent,
    EditResultComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      results: resultReducer
    }, {
      metaReducers: [storageMetaReducer]
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
