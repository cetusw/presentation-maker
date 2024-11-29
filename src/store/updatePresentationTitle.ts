import {EditorType} from './presentationTypes.ts'
import {defaultTitle} from './data/editorData.ts'

function updatePresentationTitle(editor: EditorType, newTitle: string): EditorType {
    if (newTitle == '') {
        newTitle = defaultTitle
    }
    return {
        ...editor,
        presentation: {
            ...editor.presentation,
            title: newTitle,
        }
    }
}

export {
    updatePresentationTitle,
}