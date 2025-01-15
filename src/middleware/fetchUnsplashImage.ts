import {importImageType} from '../utils/customTypes.ts'
import {ActionType} from '../store/redux/actions.ts'
import {Action} from 'redux'
import {ThunkAction} from 'redux-thunk'
import {editorReducer} from '../store/redux/editorReducer.ts'

type AppThunk = ThunkAction<void, typeof editorReducer, unknown, Action<string>>
function fetchUnsplashImage(image: HTMLImageElement, imageType: importImageType): AppThunk {
    return async (dispatch) => {
        if (imageType === 'background-image') {
            dispatch({
                type: ActionType.UPDATE_BACKGROUND_IMAGE,
                payload: image
            })
        } else if (imageType === 'slide-image') {
            dispatch({
                type: ActionType.ADD_IMAGE_TO_SLIDE,
                payload: image
            })
        }
    }
}

export {
    fetchUnsplashImage,
}