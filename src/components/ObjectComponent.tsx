import { SlideObject } from '../store/presentationTypes.ts'
import style from './ObjectComponent.module.css'
import { useDragAndDrop } from '../views/hooks/useDragAndDrop.tsx'
import React, {useEffect, useState} from 'react'
import {useAppActions} from '../views/hooks/useAppActions.tsx'

type ObjectComponentProps = {
    objectId: string;
    object: SlideObject;
    isSelected: boolean;
    scale: number;
};

function ObjectComponent({ objectId, object, isSelected, scale }: ObjectComponentProps) {
    const { updateObjectPosition } = useAppActions()
    const { elementRef, position } = useDragAndDrop({
        currentPosition: object.position,
        onPositionChange: (newPosition) => {
            updateObjectPosition({
                x: newPosition.x / scale,
                y: newPosition.y / scale
            })
        },
    })

    const [textContent, setTextContent] = useState<string>(
        object.type === 'text' ? object.content : ''
    )

    useEffect(() => {
        if (object.type === 'text') {
            setTextContent(object.content || '')
        }
    }, [object])

    const selectedObject = isSelected ? `${style.selectedObject}` : `${style.object}`

    const objectStyles = {
        width: `${object.size.width / scale}px`,
        height: object.type === 'image' ? `${object.size.height / scale}px` : 'auto',
    }

    function handleTextChange(event: React.ChangeEvent<HTMLDivElement>) {
        setTextContent(event.currentTarget.textContent || '')
    }

    return (
        <div
            id={objectId}
            ref={elementRef}
            className={selectedObject}
            style={{ ...objectStyles, transform: `translate(${position.x / scale}px, ${position.y / scale}px)` }}
            tabIndex={0}
        >
            {object.type === 'text' ? (
                <div
                    contentEditable
                    className={style.textField}
                    style={{
                        fontSize: object.fontSize / scale,
                        fontFamily: object.fontFamily,
                        color: object.fontColor,
                        fontStyle: object.fontStyle,
                    }}
                    onInput={handleTextChange} 
                    suppressContentEditableWarning={true}
                >
                    {textContent}
                </div>
            ) : object.type === 'image' ? (
                <img className={style.image} src={object.imageUrl} alt="Картинка" />
            ) : null}
        </div>
    )
}

export { ObjectComponent }
