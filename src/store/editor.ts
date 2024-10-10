let editor = {};

function getEditor() {
    return editor;
}

function setEditor(newEditor) {
    editor = newEditor;
}

function dispatch(modifyFn, payload) {
    const newEditor = modifyFn(editor, payload);
    setEditor(newEditor);
}