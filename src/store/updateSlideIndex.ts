import { EditorType, Slide } from './presentationTypes.ts'

function updateSlideIndex(editor: EditorType, newIndex: number): EditorType {
    const updatedSlides: Slide[] = [...editor.presentation.slides]
    const selectedSlideIds = editor.selection.selectedSlidesIds

    const unselectedSlides = updatedSlides.filter(slide => !selectedSlideIds.includes(slide.id))
    const toMovedSlides = updatedSlides.filter(slide => selectedSlideIds.includes(slide.id))

    if (toMovedSlides.length === 0) {
        return editor
    }

    const currentIndexes = toMovedSlides.map(slide => updatedSlides.findIndex(s => s.id === slide.id))
    const maxIndex = Math.max(...currentIndexes)

    if (newIndex > maxIndex) {
        newIndex -= toMovedSlides.length - 1
    }

    const resultSlides = [
        ...unselectedSlides.slice(0, newIndex),
        ...toMovedSlides,
        ...unselectedSlides.slice(newIndex),
    ]

    return {
        ...editor,
        presentation: {
            ...editor.presentation,
            slides: resultSlides,
        },
    }
}

export {
    updateSlideIndex,
}
