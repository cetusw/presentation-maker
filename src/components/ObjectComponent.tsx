import { SlideObject } from '../store/presentationTypes.ts'
import style from './ObjectComponent.module.css'
import { useDragAndDrop } from '../views/hooks/useDragAndDrop.tsx'
import React, {useEffect, useState} from 'react'

type ObjectComponentProps = {
    objectId: string;
    object: SlideObject;
    isSelected: boolean;
    scale: number;
};

function ObjectComponent({ objectId, object, isSelected, scale }: ObjectComponentProps) {
    const { elementRef, position } = useDragAndDrop({
        currentPosition: object.position,
        // onPositionChange: (newPosition) => {
        //     updateObjectPosition({
        //         x: newPosition.x / scale,
        //         y: newPosition.y / scale
        //     });
        // },
    })

    const [textContent, setTextContent] = useState(object.content)

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
            style={{ ...objectStyles, transform: `translate(${position.x}px, ${position.y}px)` }}
            tabIndex={0}
        >
            {object.type === 'text' ? (
                <div
                    contentEditable
                    className={style.textField}
                    style={{
                        fontSize: object.fontSize / scale,
                        fontFamily: object.fontFamily,
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
