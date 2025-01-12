import {EditorType, Gradient, ItemSelection, Position, Size} from '../presentationTypes.ts'

enum ActionType {
    ADD_SLIDE = 'addSlide',
    REMOVE_SLIDE = 'removeSlide',
    SET_SELECTION = 'setSelection',
    SET_EDITOR = 'setEditor',
    ADD_TEXT_TO_SLIDE = 'addTextToSlide',
    ADD_IMAGE_TO_SLIDE = 'addImageToSlide',
    UPDATE_BACKGROUND_IMAGE = 'updateBackgroundImage',
    UPDATE_BACKGROUND_COLOR = 'updateBackgroundColor',
    REMOVE_OBJECT_FROM_SLIDE = 'removeObjectFromSlide',
    UPDATE_PRESENTATION_TITLE = 'updatePresentationTitle',
    UPDATE_TEXT_FONT_FAMILY = 'updateTextFont',
    UPDATE_TEXT_FONT_STYLE = 'updateTextFontStyle',
    UPDATE_OBJECT_POSITION = 'updateObjectPosition',
    UPDATE_TEXT_CONTENT = 'updateTextContent',
    UPDATE_SLIDE_INDEX = 'updateSlideIndex',
    UPDATE_TEXT_DECORATION = 'updateTextDecoration',
    UPDATE_TEXT_FONT_WEIGHT = 'updateTextFontWeight',
    UPDATE_TEXT_FONT_SIZE = 'updateTextFontSize',
    UPDATE_OBJECT_SIZE = 'updateObjectSize',
    UPDATE_TEXT_FONT_COLOR = 'updateTextFontColor',
    UPDATE_BACKGROUND_GRADIENT = 'updateBackgroundGradient',
}

type AddSlideAction = {
    type: ActionType.ADD_SLIDE,
}

type RemoveSlideAction = {
    type: ActionType.REMOVE_SLIDE,
}

type SetSelectionAction = {
    type: ActionType.SET_SELECTION,
    payload: ItemSelection,
}

type SetEditorAction = {
    type: ActionType.SET_EDITOR,
    payload: EditorType,
}

type AddTextToSlideAction = {
    type: ActionType.ADD_TEXT_TO_SLIDE,
}

type AddImageToSlideAction = {
    type: ActionType.ADD_IMAGE_TO_SLIDE,
    payload: HTMLImageElement,
}

type UpdateBackgroundImageAction = {
    type: ActionType.UPDATE_BACKGROUND_IMAGE,
    payload: HTMLImageElement,
}

type UpdateBackgroundColorAction = {
    type: ActionType.UPDATE_BACKGROUND_COLOR,
    payload: string,
}

type RemoveObjectFromSlideAction = {
    type: ActionType.REMOVE_OBJECT_FROM_SLIDE,
}

type UpdatePresentationTitleAction = {
    type: ActionType.UPDATE_PRESENTATION_TITLE,
    payload: string
}

type UpdateTextFontFamilyAction = {
    type: ActionType.UPDATE_TEXT_FONT_FAMILY,
    payload: string
}

type UpdateTextFontStyleAction = {
    type: ActionType.UPDATE_TEXT_FONT_STYLE,
    payload: string
}

type UpdateObjectPositionAction = {
    type: ActionType.UPDATE_OBJECT_POSITION
    payload: Position
}

type UpdateTextContent = {
    type: ActionType.UPDATE_TEXT_CONTENT,
    payload: string,
}

type UpdateSlideIndex = {
    type: ActionType.UPDATE_SLIDE_INDEX,
    payload: number,
}

type UpdateTextDecoration = {
    type: ActionType.UPDATE_TEXT_DECORATION,
    payload: string,
}

type UpdateTextFontWeight = {
    type: ActionType.UPDATE_TEXT_FONT_WEIGHT,
    payload: number,
}

type UpdateTextFontSize = {
    type: ActionType.UPDATE_TEXT_FONT_SIZE,
    payload: string,
}

type UpdateObjectSize = {
    type: ActionType.UPDATE_OBJECT_SIZE,
    payload: Size,
}

type UpdateTextFontColor = {
    type: ActionType.UPDATE_TEXT_FONT_COLOR,
    payload: string,
}

type UpdateBackgroundGradient = {
    type: ActionType.UPDATE_BACKGROUND_GRADIENT,
    payload: Gradient,
}

type EditorAction =
    AddSlideAction |
    RemoveSlideAction |
    SetSelectionAction |
    SetEditorAction |
    AddTextToSlideAction |
    AddImageToSlideAction |
    UpdateBackgroundImageAction |
    UpdateBackgroundColorAction |
    RemoveObjectFromSlideAction |
    UpdatePresentationTitleAction |
    UpdateTextFontFamilyAction |
    UpdateTextFontStyleAction |
    UpdateObjectPositionAction |
    UpdateTextContent |
    UpdateSlideIndex |
    UpdateTextDecoration |
    UpdateTextFontWeight |
    UpdateTextFontSize |
    UpdateObjectSize |
    UpdateTextFontColor |
    UpdateBackgroundGradient

export {
    ActionType,
    type SetSelectionAction,
    type EditorAction,
}