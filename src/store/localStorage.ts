import {EditorType} from './presentationTypes.ts';
import {getEditor} from './editor.ts';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import {editorSchema} from './constants.ts';

const KEY = 'editorState';

function saveToLocalStorage() {
    localStorage.setItem(KEY, JSON.stringify(getEditor()));
}

function loadFromLocalStorage(): EditorType | null {
    const savedState = localStorage.getItem(KEY);
    const editorData = savedState ? JSON.parse(savedState) : null;

    const ajv = new Ajv();
    addFormats(ajv);
    const validate = ajv.compile(editorSchema);

    if (!validate(editorData)) {
        console.error('Ошибка при загрузке данных из local storage');
        return null;
    }

    return savedState ? JSON.parse(savedState) : null;
}

export {
    saveToLocalStorage,
    loadFromLocalStorage,
}