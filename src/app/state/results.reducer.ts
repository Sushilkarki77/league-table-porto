import { createReducer, on } from '@ngrx/store';

import { ResultItem } from '../core/interfaces/result-interfaces';
import { addResult, editResult } from './results.actions';

export interface ResultState {
    items: Array<ResultItem>
}


export const initialState: ResultState = {
    items: []
};

export const resultReducer = createReducer(
    initialState,
    on(addResult, (state: ResultState, { content }) => ({
        ...state,
        items: [...state.items, content],
    })),
    on(editResult, (state: ResultState, { content }) => {
        const items = state.items.map(key => {
            if (key.id === content.id) {
                return content.item;
            }
            return key;
        })
        return { ...state, items: [...items] }
    }),
);
