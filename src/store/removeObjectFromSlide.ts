import {EditorType, Slide, SlideObject} from './presentationTypes.ts';

function removeObjectFromSlide(editor: EditorType): EditorType {
    const slideIdToEdit: string = editor.selection.selectedSlidesIds[0];
    const objectsIdsToRemove: string[] = editor.selection.selectedObjectsIds;

    const slideToEdit = editor.presentation.slides.find(slide => slide.id === slideIdToEdit);
    if (!slideToEdit) {
        return editor;
    }

    const updatedObjects: SlideObject[] = slideToEdit.objects.filter(
        object => !objectsIdsToRemove.some(toRemove => object.id === toRemove)
    );

    const updatedSlide: Slide = {
        ...slideToEdit,
        objects: updatedObjects,
    };

    const updatedSlides: Slide[] = editor.presentation.slides.map(slide =>
        slide.id === slideIdToEdit ? updatedSlide : slide
    );

    return {
        presentation: {
            ...editor.presentation,
            slides: updatedSlides,
        },
        selection: {
            selectedSlidesIds: editor.selection.selectedSlidesIds,
            selectedObjectsIds: [],
        }
    };
}

export {
    removeObjectFromSlide,
}