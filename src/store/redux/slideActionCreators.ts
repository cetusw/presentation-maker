import { ActionType } from './actions'
import {Gradient, Position, Size} from '../presentationTypes.ts'

function addSlide() {
    return {
        type: ActionType.ADD_SLIDE,
    }
}

function removeSlide() {
    return {
        type: ActionType.REMOVE_SLIDE,
    }
}

function removeObjectFromSlide() {
    return {
        type: ActionType.REMOVE_OBJECT_FROM_SLIDE,
    }
}

function addTextToSlide() {
    return {
        type: ActionType.ADD_TEXT_TO_SLIDE,
    }
}

function addImageToSlide(image: HTMLImageElement) {
    return {
        type: ActionType.ADD_IMAGE_TO_SLIDE,
        payload: image,
    }
}

function updateBackgroundImage(image: HTMLImageElement) {
    return {
        type: ActionType.UPDATE_BACKGROUND_IMAGE,
        payload: image,
    }
}

function updateBackgroundColor(color: string) {
    return {
        type: ActionType.UPDATE_BACKGROUND_COLOR,
        payload: color,
    }
}

function updatePresentationTitle(newTitle: string) {
    return {
        type: ActionType.UPDATE_PRESENTATION_TITLE,
        payload: newTitle,
    }
}

function updateTextFontFamily(newFontFamily: string) {
    return {
        type: ActionType.UPDATE_TEXT_FONT_FAMILY,
        payload: newFontFamily,
    }
}

function updateTextFontStyle(newFontStyle: string) {
    return {
        type: ActionType.UPDATE_TEXT_FONT_STYLE,
        payload: newFontStyle,
    }
}

function updateObjectPosition(newPosition: Position) {
    return {
        type: ActionType.UPDATE_OBJECT_POSITION,
        payload: newPosition,
    }
}

function updateTextContent(newContent: string) {
    return {
        type: ActionType.UPDATE_TEXT_CONTENT,
        payload: newContent,
    }
}

function updateSlideIndex(newIndex: number) {
    return {
        type: ActionType.UPDATE_SLIDE_INDEX,
        payload: newIndex,
    }
}

function updateTextDecoration(newTextDecoration: string) {
    return {
        type: ActionType.UPDATE_TEXT_DECORATION,
        payload: newTextDecoration,
    }
}

function updateTextFontWeight(newFontWeight: number) {
    return {
        type: ActionType.UPDATE_TEXT_FONT_WEIGHT,
        payload: newFontWeight,
    }
}

function updateTextFontSize(newFontSize: string) {
    return {
        type: ActionType.UPDATE_TEXT_FONT_SIZE,
        payload: newFontSize,
    }
}

function updateObjectSize(newObjectSize: Size) {
    return {
        type: ActionType.UPDATE_OBJECT_SIZE,
        payload: newObjectSize,
    }
}

function updateTextFontColor(newFontColor: string) {
    return {
        type: ActionType.UPDATE_TEXT_FONT_COLOR,
        payload: newFontColor,
    }
}

function updateBackgroundGradient(newGradient: Gradient) {
    return {
        type: ActionType.UPDATE_BACKGROUND_GRADIENT,
        payload: newGradient,
    }
}

function fetchUnsplashImages(newQuery: string) {
    return {
        type: ActionType.FETCH_UNSPLASH_IMAGES,
        payload: newQuery,
    }
}

export {
    addSlide,
    removeSlide,
    addTextToSlide,
    addImageToSlide,
    updateBackgroundImage,
    updateBackgroundColor,
    removeObjectFromSlide,
    updatePresentationTitle,
    updateTextFontFamily,
    updateTextFontStyle,
    updateObjectPosition,
    updateTextContent,
    updateSlideIndex,
    updateTextDecoration,
    updateTextFontWeight,
    updateTextFontSize,
    updateObjectSize,
    updateTextFontColor,
    updateBackgroundGradient,
    fetchUnsplashImages,
}