import { ActionReducer, Action } from '@ngrx/store';

function setSavedState(state: any, localStorageKey: string) {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
}
function getSavedState(localStorageKey: string) {
  const item = localStorage.getItem(localStorageKey) || null;
  if (item) { return JSON.parse(item); }
}

// the key for the local storage.
const localStorageKey = '__app_storage__';

export function storageMetaReducer<S, A extends Action = Action>(reducer: ActionReducer<S, A>): any {
  let onInit = true; // after load/refresh…
  return function (state: S, action: A): S {
    // reduce the nextState.
    const nextState: any = reducer(state, action);
    // init the application state.
    if (onInit) {
      onInit = false;
      const savedState = getSavedState(localStorageKey);

      if(savedState){
        nextState.results.items = [...nextState?.results?.items, ...savedState]
      }
      return nextState;
    }
    // save the next state to the application storage.
    if(nextState?.results?.items){ // So, we want to save results.items to local storage.
      setSavedState(nextState?.results?.items, localStorageKey);
    } 
    return nextState;
  };
}