import {EditorType, Position, Slide, SlideObject} from './presentationTypes.ts'

function updateSlideObject(editor: EditorType, slideToEdit: Slide, newObject: SlideObject) {
    const updatedObjects: SlideObject[] = slideToEdit.objects.map((obj) => {
        if (obj.id !== newObject.id) return obj

        return newObject
    })

    const updatedSlide: Slide = {
        ...slideToEdit,
        objects: updatedObjects,
    }

    const updatedSlides: Slide[] = editor.presentation.slides.map(slide =>
        slide.id === slideToEdit.id ? updatedSlide : slide
    )
    return {
        presentation: {
            ...editor.presentation,
            slides: updatedSlides
        },
        selection: {
            ...editor.selection
        }
    }
}

function findSlideToEdit(editor: EditorType){
    const slideIdToEdit: string = editor.selection.selectedSlidesIds[0]
    const slideToEdit = editor.presentation.slides.find(slide => slide.id === slideIdToEdit)
    return slideToEdit
}

function findObjectToEdit(editor: EditorType, slideToEdit: Slide) {
    const objectIdToEdit = editor.selection.selectedObjectsIds[0]
    const objectToEdit = slideToEdit.objects.find(object => object.id === objectIdToEdit)
    return objectToEdit
}

function updateTextFontFamily(editor: EditorType, newFontFamily: string): EditorType {
    const slideToEdit = findSlideToEdit(editor)
    if (!slideToEdit) {
        return editor
    }
    const objectToEdit = findObjectToEdit(editor, slideToEdit)
    if (!objectToEdit || objectToEdit.type !== 'text') {
        return editor
    }

    return updateSlideObject(editor, slideToEdit, {
        ...objectToEdit,
        fontFamily: newFontFamily,
    })
}

function updateObjectPosition(editor: EditorType, newPosition: Position) {
    const slideToEdit = findSlideToEdit(editor)
    if (!slideToEdit) {
        return editor
    }
    const objectToEdit = findObjectToEdit(editor, slideToEdit)
    if (!objectToEdit) {
        return editor
    }

    return updateSlideObject(editor, slideToEdit, {
        ...objectToEdit,
        position: newPosition,
    })
}

function updateTextFontSize(editor: EditorType, newFontSize: string) {
    const slideToEdit = findSlideToEdit(editor)
    if (!slideToEdit) {
        return editor
    }
    const objectToEdit = findObjectToEdit(editor, slideToEdit)
    if (!objectToEdit || objectToEdit.type !== 'text') {
        return editor
    }

    return updateSlideObject(editor, slideToEdit, {
        ...objectToEdit,
        fontSize: Number(newFontSize),
    })
}

function updateTextFontStyle(editor: EditorType, newFontStyle: string) {
    const slideToEdit = findSlideToEdit(editor)
    if (!slideToEdit) {
        return editor
    }
    const objectToEdit = findObjectToEdit(editor, slideToEdit)
    if (!objectToEdit || objectToEdit.type !== 'text') {
        return editor
    }

    return updateSlideObject(editor, slideToEdit, {
        ...objectToEdit,
        fontStyle: newFontStyle,
    })
}

function updateTextDecoration(editor: EditorType, newTextDecoration: string) {
    const slideToEdit = findSlideToEdit(editor)
    if (!slideToEdit) {
        return editor
    }
    const objectToEdit = findObjectToEdit(editor, slideToEdit)
    if (!objectToEdit || objectToEdit.type !== 'text') {
        return editor
    }

    return updateSlideObject(editor, slideToEdit, {
        ...objectToEdit,
        textDecoration: newTextDecoration,
    })
}

function updateTextFontWeight(editor: EditorType, newFontWeight: number) {
    const slideToEdit = findSlideToEdit(editor)
    if (!slideToEdit) {
        return editor
    }
    const objectToEdit = findObjectToEdit(editor, slideToEdit)
    if (!objectToEdit || objectToEdit.type !== 'text') {
        return editor
    }

    return updateSlideObject(editor, slideToEdit, {
        ...objectToEdit,
        fontWeight: newFontWeight,
    })
}

function updateTextContent(editor: EditorType, newText: string) {
    const slideToEdit = findSlideToEdit(editor)
    if (!slideToEdit) {
        return editor
    }
    const objectToEdit = findObjectToEdit(editor, slideToEdit)
    if (!objectToEdit || objectToEdit.type !== 'text') {
        return editor
    }

    return updateSlideObject(editor, slideToEdit, {
        ...objectToEdit,
        content: newText,
    })
}

export {
    updateTextFontFamily,
    updateObjectPosition,
    updateTextFontSize,
    updateTextFontStyle,
    updateTextContent,
    updateTextDecoration,
    updateTextFontWeight,
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
//