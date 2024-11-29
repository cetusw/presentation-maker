import { legacy_createStore as createStore } from 'redux'
import { editorReducer } from './editorReducer.ts'
import {loadFromLocalStorage, saveToLocalStorage} from '../localStorage.ts'

const rootState = loadFromLocalStorage()

const store = createStore(editorReducer, rootState || undefined)

store.subscribe(() => {
    saveToLocalStorage(store.getState())
})

export {
    store
}