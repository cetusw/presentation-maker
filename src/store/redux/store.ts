import { legacy_createStore as createStore } from 'redux';
import { editorReducer } from './editorReducer.ts';

const store = createStore(editorReducer)

export {
    store
}