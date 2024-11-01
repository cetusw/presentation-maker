import {EditorType} from './presentationTypes.ts';
import {getEditor} from './editor.ts';

const KEY = 'editorState';

function saveToLocalStorage() {
    localStorage.setItem(KEY, JSON.stringify(getEditor()));
}

function loadFromLocalStorage(): EditorType | null {
    const savedState = localStorage.getItem(KEY);
    return savedState ? JSON.parse(savedState) : null;
}

export {
    saveToLocalStorage,
    loadFromLocalStorage,
}