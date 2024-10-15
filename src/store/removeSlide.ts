import {EditorType, Slide} from './presentationTypes.ts';

function removeSlides(editor: EditorType): EditorType {
    const removeSlideId = editor.selection.selectedSlidesIds;

    const updatedSlides: Slide[] = editor.presentation.slides.filter(slide => !removeSlideId.some(toRemove => slide.id === toRemove));

    const removeSlideIndex = editor.presentation.slides.findIndex(slide => slide.id == removeSlideId[0])

    let newSelectedSlideId = '0';
    if (updatedSlides.length > 0) {
        const index = Math.min(removeSlideIndex, updatedSlides.length - 1)
        newSelectedSlideId = updatedSlides[index].id
    }

    return {
        presentation: {
            ...editor.presentation,
            slides: updatedSlides,
        },
        selection: {
            selectedSlidesIds: [newSelectedSlideId],
            selectedObjectsIds: [],
        },
    };
}

export {
    removeSlides,
}