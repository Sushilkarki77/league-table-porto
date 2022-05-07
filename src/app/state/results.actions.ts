import { createAction, props } from '@ngrx/store';
import { ResultItem } from '../core/interfaces/result-interfaces';

export const addResult = createAction('[RESULT] Add Result', props<{ content: ResultItem }>());

export const editResult = createAction('[RESULT] Edit Result', props<{ content: {id: number, item: ResultItem} }>());