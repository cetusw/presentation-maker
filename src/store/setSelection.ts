import {EditorType, ItemSelection} from './presentationTypes.ts';

function setSelection(editor: EditorType, newSelection: ItemSelection): EditorType {
    return {
        ...editor,
        selection: newSelection,
    }
}

export {
    setSelection,
}
