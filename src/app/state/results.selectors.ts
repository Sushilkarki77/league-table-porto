import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { ResultState } from './results.reducer';

export const selectResults = (state: AppState) => state?.results;
export const selectAllResults = createSelector(
    selectResults,
    (state: ResultState) => state.items
);