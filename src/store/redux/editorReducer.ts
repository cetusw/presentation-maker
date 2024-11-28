import {EditorType} from '../presentationTypes.ts';
import {addSlide} from '../addSlide.ts';
import {setSelection} from '../setSelection.ts';
import {ActionType, EditorAction} from './actions';
import {defaultEditor} from '../data/editorData.ts';
import {removeSlide} from '../removeSlide.ts';
import {addImageToSlide, addTextToSlide} from '../addObjectToSlide.ts';
import {updateBackgroundColor, updateBackgroundImage} from '../updateSlideBackground.ts';

function editorReducer(editor: EditorType = defaultEditor, action: EditorAction): EditorType {
    switch (action.type) {
        case ActionType.ADD_SLIDE:
            return addSlide(editor)
        case ActionType.REMOVE_SLIDE:
            return removeSlide(editor)
        case ActionType.SET_SELECTION:
            return setSelection(editor, action)
        case ActionType.SET_EDITOR:
            return action.payload
        case ActionType.ADD_TEXT_TO_SLIDE:
            return addTextToSlide(editor);
        case ActionType.ADD_IMAGE_TO_SLIDE:
            return addImageToSlide(editor, action.payload);
        case ActionType.UPDATE_BACKGROUND_IMAGE:
            return updateBackgroundImage(editor, action.payload);
        case ActionType.UPDATE_BACKGROUND_COLOR:
            return updateBackgroundColor(editor, action.payload);
        default:
            return editor
    }
}

export {
    editorReducer,
}