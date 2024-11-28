import { ItemSelection } from '../presentationTypes.ts';
import { ActionType } from './actions';

function setSelection(newSelection: ItemSelection) {
    return {
        type: ActionType.SET_SELECTION,
        payload: newSelection,
    }
}

export {
    setSelection,
}