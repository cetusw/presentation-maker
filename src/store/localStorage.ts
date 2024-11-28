import {EditorType} from './presentationTypes.ts';
import {validateEditor} from '../utils/ajv.ts';

const KEY = 'editorState';

function saveToLocalStorage(editor: EditorType) {
    localStorage.setItem(KEY, JSON.stringify(editor));
}

function loadFromLocalStorage(): EditorType | null {
    const savedState = localStorage.getItem(KEY);
    const editorData = savedState ? JSON.parse(savedState) : null;

    if (!validateEditor(editorData)){
        return null;
    }

    return savedState ? JSON.parse(savedState) : null;
}

export {
    saveToLocalStorage,
    loadFromLocalStorage,
}