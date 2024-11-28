import {EditorType} from './presentationTypes.ts';
import {loadFromLocalStorage, saveToLocalStorage} from './localStorage.ts';
import {defaultEditor} from './data/editorData.ts';

const editorFromLocalStorage = loadFromLocalStorage();
let _editor = editorFromLocalStorage !== null ? editorFromLocalStorage : defaultEditor;
let _handler: () => void;

function getEditor() {
    return _editor;
}

function setEditor(newEditor: EditorType) {
    _editor = newEditor;
    saveToLocalStorage(getEditor());
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