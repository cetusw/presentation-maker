import { legacy_createStore as createStore } from 'redux';
import { editorReducer } from './editorReducer.ts';
import {loadFromLocalStorage, saveToLocalStorage} from '../localStorage.ts';

const persistedState = loadFromLocalStorage();

const store = createStore(editorReducer, persistedState || undefined);

store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

export {
    store
}