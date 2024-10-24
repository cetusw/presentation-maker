import {EditorType} from './presentationTypes.ts';

function updatePresentationTitle(editor: EditorType, newTitle: string): EditorType {
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