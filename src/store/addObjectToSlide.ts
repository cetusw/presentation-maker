import {EditorType, ImageObject, Slide, SlideObject, TextObject} from './presentationTypes.ts';
import {v4 as generateUuid} from 'uuid';
import {defaultFontFamily, defaultFontSize, defaultPosition, defaultSize, defaultText} from './constants.ts';

function addObjectToSlide(editor: EditorType, editSlideId: string, object: SlideObject) {
    const editSlide = editor.presentation.slides.find(slide => slide.id === editSlideId);
    if (!editSlide) {
        return editor;
    }

    const updatedObjects: SlideObject[] = [...editSlide.objects, object];

    const updatedSlide: Slide = {
        ...editSlide,
        objects: updatedObjects,
    }

    const updatedSlides: Slide[] = editor.presentation.slides.map(slide => slide.id === editSlide.id ? updatedSlide : slide);

    return {
        presentation: {
            ...editor.presentation,
            slides: updatedSlides,
        },
        selection: editor.selection,
    }
}

function addTextToSlide(editor: EditorType) {
    const editSlideId: string = editor.selection.selectedSlidesIds[0];

    const textForSlide: TextObject = {
        id: `text-${generateUuid()}`,
        type: 'text',
        content: defaultText,
        fontFamily: defaultFontFamily,
        fontSize: defaultFontSize,
        position: defaultPosition,
        size: defaultSize,
    }

    return addObjectToSlide(editor, editSlideId, textForSlide);
}

function addImageToSlide(editor: EditorType, url: string) {
    const editSlideId: string = editor.selection.selectedSlidesIds[0];

    const imageForSlide: ImageObject = {
        id: `image-${generateUuid()}`,
        type: 'image',
        imageUrl: url,
        position: defaultPosition,
        size: defaultSize,
    }

    return addObjectToSlide(editor, editSlideId, imageForSlide);
}

export {
    addObjectToSlide,
    addTextToSlide,
    addImageToSlide,
}