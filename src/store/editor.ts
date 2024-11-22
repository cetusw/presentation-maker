import {EditorType} from './presentationTypes.ts';
import {loadFromLocalStorage, saveToLocalStorage} from './localStorage.ts';
import {editor} from './constants.ts';

const editorFromLocalStorage = loadFromLocalStorage();
let _editor = editorFromLocalStorage !== null ? editorFromLocalStorage : editor;
let _handler: () => void;

function getEditor() {
    return _editor;
}

function setEditor(newEditor: EditorType) {
    _editor = newEditor;
    saveToLocalStorage();
}

// eslint-disable-next-line
function dispatch(modifyFn: Function, payload?: Object): void {
    const newEditor = modifyFn(_editor, payload);
    setEditor(newEditor);

    if (_handler) {
        _handler();
    }
}

function addEditorChangeHandler(handler: () => void): void {
    _handler = handler;
}

export {
    getEditor,
    dispatch,
    addEditorChangeHandler,
    setEditor,
}