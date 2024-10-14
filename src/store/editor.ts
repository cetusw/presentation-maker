import {editor} from './constants.ts'
import {EditorType} from './presentationTypes.ts';

let _editor = editor;
let _handler: () => void;

function getEditor() {
    return _editor;
}

function setEditor(newEditor: EditorType) {
    _editor = newEditor;
}

function dispatch(modifyFn: Function, payload?: object): void {
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
}