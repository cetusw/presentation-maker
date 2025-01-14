import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { editorReducer } from './editorReducer.ts'
import { thunk } from 'redux-thunk'
import {loadFromLocalStorage, saveToLocalStorage} from '../localStorage.ts'

const rootState = loadFromLocalStorage()

const store = createStore(editorReducer, rootState || undefined, applyMiddleware(thunk))

store.subscribe(() => {
    saveToLocalStorage(store.getState())
})

export {
    store
}