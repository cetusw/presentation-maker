import { ActionType } from './actions'

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

export {
    addSlide,
    removeSlide,
    addTextToSlide,
    addImageToSlide,
    updateBackgroundImage,
    updateBackgroundColor,
    removeObjectFromSlide,
    updatePresentationTitle,
}