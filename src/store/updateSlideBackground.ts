import {BackgroundType, EditorType, Gradient, Slide} from './presentationTypes.ts'

function updateSlideBackground(editor: EditorType,  newBackground: BackgroundType): EditorType {
    const slideIdToEdit = editor.selection.selectedSlidesIds[0]
    const slideToEdit = editor.presentation.slides.find(slide => slide.id === slideIdToEdit)

    if (!slideToEdit) {
        return editor
    }

    const updatedSlide: Slide = {
        ...slideToEdit,
        background: newBackground,
    }

    const updatedSlides: Slide[] = editor.presentation.slides.map(slide => slide.id === slideIdToEdit ? updatedSlide : slide)

    return {
        presentation: {
            ...editor.presentation,
            slides: updatedSlides,
        },
        selection: editor.selection
    }
}

function updateBackgroundColor(editor: EditorType, newColor: string): EditorType {
    return updateSlideBackground(editor, {
        type: 'color',
        color: newColor,
    })
}

function updateBackgroundImage(editor: EditorType, image: HTMLImageElement): EditorType {
    return updateSlideBackground(editor, {
        type: 'image',
        imageUrl: image.src,
    })
}

function updateBackgroundGradient(editor: EditorType, { firstColor, secondColor }: Gradient): EditorType {
    return updateSlideBackground(editor, {
        type: 'gradient',
        firstColor: firstColor,
        secondColor: secondColor,
    })
}

export {
    updateBackgroundColor,
    updateBackgroundGradient,
    updateBackgroundImage,
}