import {EditorType, Slide} from './presentationTypes.ts'
import {v4 as generateUuid} from 'uuid'
import {defaultColor} from './data/editorData.ts'

function addSlide(editor: EditorType): EditorType {
    const newSlide: Slide = {
        id: `slide-${generateUuid()}`,
        background: {
            type: 'color',
            color: defaultColor,
        },
        objects: [],
    }

    const updatedSlides: Slide[] = [...editor.presentation.slides, newSlide]

    return {
        ...editor,
        presentation: {
            ...editor.presentation,
            slides: updatedSlides,
        },
    }
}

export {
    addSlide,
}