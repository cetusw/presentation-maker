import {SlideObject} from '../store/presentationTypes.ts';
import style from './ObjectComponent.module.css';
import {handleKeyPress} from '../store/keyPressHandler.ts';
import {defaultText} from '../store/constants.ts';
import React from 'react';

type ObjectComponentProps = {
    object: SlideObject,
    scale: number,
    isSelected: boolean,
};

function ObjectComponent({object, scale, isSelected}: ObjectComponentProps) {
    const selectedObject = isSelected
        ? `${style.selectedObject}`
        : `${style.object}`;

    const objectStyles = {
        left: object.position.x / scale,
        top: object.position.y / scale,
        width: `${object.size.width / scale}px`,
        height: `${object.size.height / scale}px`,
    };

    function resizeTextArea(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const textarea = event.target;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    }

    return (
        <div
            className={selectedObject}
            style={{ ...objectStyles }}
            onKeyDown={() => handleKeyPress}
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