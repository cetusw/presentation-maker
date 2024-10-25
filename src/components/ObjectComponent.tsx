import {SlideObject} from '../store/presentationTypes.ts';
import style from './ObjectComponent.module.css';
import {handleKeyPress} from '../store/keyPressHandler.ts';
import {defaultText} from '../store/constants.ts';
import React from 'react';

type ObjectComponentProps = {
    objectId: string,
    object: SlideObject,
    scale: number,
    isSelected: boolean,
};

function ObjectComponent({objectId, object, scale, isSelected}: ObjectComponentProps) {
    const selectedObject = isSelected
        ? `${style.selectedObject}`
        : `${style.object}`;

    const objectStyles = {
        left: object.position.x / scale,
        top: object.position.y / scale,
        width: `${object.size.width / scale}px`,
        height: object.type === 'image' ? `${object.size.height / scale}px` : 'auto',
    };

    function resizeTextArea(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const textarea = event.target;
        const objectElement = document.getElementById(objectId)
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
        if (objectElement) {
            objectElement.style.height = `${textarea.scrollHeight}px`;
        }
    }

    return (
        <div
            id={objectId}
            className={selectedObject}
            style={{ ...objectStyles }}
            onKeyDown={() => handleKeyPress}
            tabIndex={0}
        >
            {object.type === 'text' ? (
                <textarea
                    className={style.textField}
                    style={{
                        fontSize: object.fontSize / scale,
                    }}
                    defaultValue={object.content}
                    placeholder={defaultText}
                    onInput={resizeTextArea}
                />
            ) : object.type === 'image' ? (
                <img
                    className={style.image}
                    src={object.imageUrl}
                    alt="Картинка"
                />
            ) : null}
        </div>
    );
}

export {
    ObjectComponent,
}