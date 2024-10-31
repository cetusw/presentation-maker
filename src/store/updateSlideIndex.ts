import {EditorType, Slide} from './presentationTypes.ts';

function updateSlideIndex(editor: EditorType, newIndex: number): EditorType {
    const updatedSlides: Slide[] = [...editor.presentation.slides];

    const slideIdToMove = editor.selection.selectedSlidesIds[0];
    const currentIndex: number = updatedSlides.findIndex(slide => slide.id === slideIdToMove);

    if (currentIndex === -1) {
        return editor;
    }

    const [removedSlide] = updatedSlides.splice(currentIndex, 1);
    updatedSlides.splice(newIndex, 0, removedSlide);

    return {
        presentation: {
            ...editor.presentation,
            slides: updatedSlides,
        },
        selection: editor.selection,
    };
}

export {
    updateSlideIndex,
}