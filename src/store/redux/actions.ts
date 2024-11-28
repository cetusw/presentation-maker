import { EditorType, ItemSelection } from '../presentationTypes.ts'

enum ActionType {
    ADD_SLIDE = 'addSlide',
    REMOVE_SLIDE = 'removeSlide',
    SET_SELECTION = 'setSelection',
    SET_EDITOR = 'setEditor',
    ADD_TEXT_TO_SLIDE = 'addTextToSlide',
    ADD_IMAGE_TO_SLIDE = 'addImageToSlide',
    UPDATE_BACKGROUND_IMAGE = 'updateBackgroundImage',
    UPDATE_BACKGROUND_COLOR = 'updateBackgroundColor',
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

type UpdateBackgroundImage = {
    type: ActionType.UPDATE_BACKGROUND_IMAGE,
    payload: HTMLImageElement,
}

type UpdateBackgroundColor = {
    type: ActionType.UPDATE_BACKGROUND_COLOR,
    payload: string,
}

type EditorAction =
    AddSlideAction |
    RemoveSlideAction |
    SetSelectionAction |
    SetEditorAction |
    AddTextToSlideAction |
    AddImageToSlideAction |
    UpdateBackgroundImage |
    UpdateBackgroundColor

export {
    ActionType,
    type SetSelectionAction,
    type EditorAction,
}