import {dispatch, getEditor} from './editor.ts';
import {removeObjectFromSlide} from './removeObjectFromSlide.ts';
import React from 'react';
import {removeSlide} from './removeSlide.ts';
function onRemoveObject() {
    dispatch(removeObjectFromSlide)
}

function onRemoveSlide() {
    dispatch(removeSlide);
}

function handleKeyPress(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Delete') {
        if (getEditor()?.selection.selectedObjectsIds?.length !== 0 && getEditor()?.selection.selectedSlidesIds?.length !== 0) {
            onRemoveObject();
        }
        else if (getEditor()?.selection.selectedObjectsIds?.length === 0 && getEditor()?.selection.selectedSlidesIds?.length !== 0) {
            onRemoveSlide();
        }
    }
}

export {
    handleKeyPress
}