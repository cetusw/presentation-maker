import {EditorType} from './presentationTypes.ts';
import {defaultTitle} from './data/editorData.ts';
import {getEditor} from './editor.ts';

function updatePresentationTitle(editor: EditorType, newTitle: string): EditorType {
    console.log(getEditor()?.presentation.title)
    if (newTitle == '') {
        newTitle = defaultTitle;
    }
    return {
        ...editor,
        presentation: {
            ...editor.presentation,
            title: newTitle,
        }
    };
}

export {
    updatePresentationTitle,
}