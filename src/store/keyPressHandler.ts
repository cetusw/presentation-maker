import {dispatch} from './editor.ts';
import {removeObjectFromSlide} from './removeObjectFromSlide.ts';
import React from 'react';
function onRemoveObject() {
    dispatch(removeObjectFromSlide)
}

function handleKeyPress(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Delete') {
        onRemoveObject();
        console.log('delete')
    }
    console.log('delete')
}

export {
    handleKeyPress
}