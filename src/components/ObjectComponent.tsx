import {SlideObject} from '../store/presentationTypes.ts'
import style from './ObjectComponent.module.css'
import {defaultText} from '../store/data/editorData.ts'
import {useDragAndDrop} from '../views/hooks/useDragAndDrop.tsx'
import React from 'react'
// import {useAppActions} from '../views/hooks/useAppActions.tsx'

type ObjectComponentProps = {
    objectId: string
    object: SlideObject
    isSelected: boolean
    scale: number
};

function ObjectComponent({ objectId, object, isSelected, scale }: ObjectComponentProps) {
    // const {updateObjectPosition} = useAppActions()

    const {elementRef, position} = useDragAndDrop({
        currentPosition: object.position,
        // onPositionChange: (newPosition) => {
        //     updateObjectPosition({
        //         x: newPosition.x / scale,
        //         y: newPosition.y / scale
        //     })
        // },
    })

    const selectedObject = isSelected
        ? `${style.selectedObject}`
        : `${style.object}`

    const objectStyles = {
        left: object.position.x / scale,
        top: object.position.y / scale,
        width: `${object.size.width / scale}px`,
        height: object.type === 'image' ? `${object.size.height / scale}px` : 'auto',
    }

    function resizeTextArea(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const textarea = event.target
        const objectElement = document.getElementById(objectId)
        textarea.style.height = 'auto'
        textarea.style.height = `${textarea.scrollHeight}px`
        if (objectElement) {
            objectElement.style.height = `${textarea.scrollHeight}px`
        }
    }

    return (
        <div
            id={objectId}
            ref={elementRef}
            className={selectedObject}
            style={{...objectStyles, transform: `translate(${position.x}px, ${position.y}px)`}}
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
    )
}

export {
    ObjectComponent,
}