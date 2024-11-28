import {EditorType, Position, Slide, SlideObject} from './presentationTypes.ts';

function updateSlideObject(editor: EditorType, slideToEdit: Slide, newObject: SlideObject) {
    const updatedObjects: SlideObject[] = slideToEdit.objects.map((obj) => {
        if (obj.id !== newObject.id) return obj;

        return newObject;
    });

    const updatedSlide: Slide = {
        ...slideToEdit,
        objects: updatedObjects,
    };

    const updatedSlides: Slide[] = editor.presentation.slides.map(slide =>
        slide.id === slideToEdit.id ? updatedSlide : slide
    );

    return {
        presentation: {
            ...editor.presentation,
            slides: updatedSlides
        },
        selection: {
            ...editor.selection
        }
    };
}

export function updateObjectPosition(editor: EditorType, newPosition: Position) {
    const slideIdToEdit: string = editor.selection.selectedSlidesIds[0];
    const slideToEdit = editor.presentation.slides.find(slide => slide.id === slideIdToEdit);

    if (!slideToEdit) {
        return editor;
    }

    const objectIdToEdit = editor.selection.selectedObjectsIds[0];
    const objectToEdit = slideToEdit.objects.find(object => object.id === objectIdToEdit);

    if (!objectToEdit) {
        return editor;
    }

    return updateSlideObject(editor, slideToEdit, {
        ...objectToEdit,
        position: newPosition,
    });
}

// export function updateObjectSize(presentation: Presentation, items: ItemSelection, newSize: Size) {
//     const slideIdToEdit: string = items.selectedSlidesIds[0];
//     const objectToEdit = findSelectedObject(presentation, items);
//
//     if (!objectToEdit) {
//         return presentation
//     }
//
//     return updateSlideObject(presentation, slideIdToEdit, {
//         ...objectToEdit,
//         size: newSize,
//     });
// }
//
// export function updateTextContent(presentation: Presentation, items: ItemSelection, newText: string) {
//     const slideIdToEdit: string = items.selectedSlidesIds[0];
//     const objectToEdit = findSelectedObject(presentation, items);
//
//     if (!objectToEdit) {
//         return presentation
//     }
//
//     return updateSlideObject(presentation, slideIdToEdit, {
//         ...objectToEdit,
//         content: newText,
//     });
// }
//
// export function updateTextFontSize(presentation: Presentation, items: ItemSelection, newFontSize: number) {
//     const slideIdToEdit: string = items.selectedSlidesIds[0];
//     const objectToEdit = findSelectedObject(presentation, items);
//
//     if (!objectToEdit) {
//         return presentation
//     }
//
//     return updateSlideObject(presentation, slideIdToEdit, {
//         ...objectToEdit,
//         fontSize: newFontSize,
//     });
// }
//
// export function updateTextFontFamily(presentation: Presentation, items: ItemSelection, newFontFamily: string) {
//     const slideIdToEdit: string = items.selectedSlidesIds[0];
//     const objectToEdit = findSelectedObject(presentation, items);
//
//     if (!objectToEdit) {
//         return presentation
//     }
//
//     return updateSlideObject(presentation, slideIdToEdit, {
//         ...objectToEdit,
//         fontFamily: newFontFamily,
//     });
// }