import { SlideObject } from '../store/presentationTypes.ts'
import style from './ObjectComponent.module.css'
import { useDragAndDrop } from '../views/hooks/useDragAndDrop.tsx'
import React, {useEffect, useState} from 'react'
import {useAppActions} from '../views/hooks/useAppActions.tsx'
import {useResize} from '../views/hooks/useResize.tsx'

type ObjectComponentProps = {
    objectId: string;
    object: SlideObject;
    isSelected: boolean;
    scale: number;
};

function ObjectComponent({ objectId, object, isSelected, scale }: ObjectComponentProps) {
    const { updateObjectPosition, updateTextContent, updateObjectSize } = useAppActions()
    const { elementRef, position } = useDragAndDrop({
        currentPosition: object.position,
        onPositionChange: (newPosition) => {
            updateObjectPosition({
                x: newPosition.x / scale,
                y: newPosition.y / scale,
            })
        },
    })

    const { size } = useResize({
        currentSize: object.size,
        onSizeChange: (newSize) => {
            updateObjectSize({
                width: newSize.width / scale,
                height: newSize.height / scale,
            })
        },
        elementRef,
    })

    const [textContent, setTextContent] = useState<string>(
        object.type === 'text' ? object.content : ''
    )

    useEffect(() => {
        if (object.type === 'text') {
            setTextContent(object.content || '')
        }
    }, [isSelected])

    const selectedObject = isSelected ? `${style.selectedObject}` : `${style.object}`

    const objectStyles = {
        width: `${size.width / scale}px`,
        height: `${size.height / scale}px`,
    }

    function handleTextChange(event: React.ChangeEvent<HTMLDivElement>) {
        updateTextContent(event.currentTarget.textContent || '')
    }

    let resizeStyles: React.CSSProperties = {
        width: `${10 / scale}px`,
        height: `${10 / scale}px`,
        visibility: 'hidden'
    }
    if (isSelected) {
        resizeStyles = {
            width: `${10 / scale}px`,
            height: `${10 / scale}px`,
            visibility: 'visible'
        }
    }

    return (
        <div
            id={objectId}
            ref={elementRef}
            className={selectedObject}
            style={{...objectStyles, transform: `translate(${position.x / scale}px, ${position.y / scale}px)`}}
            tabIndex={0}
        >
            <div
                className={style.top}
                data-resize-direction="top"
                style={{
                    ...resizeStyles,
                    top: `-${5 / scale}px`
                }}>
            </div>
            <div
                className={style.topRight}
                data-resize-direction="top-right"
                style={{
                    ...resizeStyles,
                    top: `-${5 / scale}px`,
                    right: `-${5 / scale}px`,
                }}>
            </div>
            <div
                className={style.right}
                data-resize-direction="right"
                style={{
                    ...resizeStyles,
                    right: `-${5 / scale}px`,
                }}>
            </div>
            <div
                className={style.bottomRight}
                data-resize-direction="bottom-right"
                style={{
                    ...resizeStyles,
                    bottom: `-${5 / scale}px`,
                    right: `-${5 / scale}px`,
                }}>
            </div>
            <div
                className={style.bottom}
                data-resize-direction="bottom"
                style={{
                    ...resizeStyles,
                    bottom: `-${5 / scale}px`,
                }}>
            </div>
            <div
                className={style.bottomLeft}
                data-resize-direction="bottom-left"
                style={{
                    ...resizeStyles,
                    bottom: `-${5 / scale}px`,
                    left: `-${5 / scale}px`,
                }}>
            </div>
            <div
                className={style.left}
                data-resize-direction="left"
                style={{
                    ...resizeStyles,
                    left: `-${5 / scale}px`,
                }}>
            </div>
            <div
                className={style.topLeft}
                data-resize-direction="top-left"
                style={{
                    ...resizeStyles,
                    top: `-${5 / scale}px`,
                    left: `-${5 / scale}px`,
                }}>
            </div>
            {object.type === 'text' ? (
                <div
                    contentEditable
                    className={style.textField}
                    style={{
                        fontSize: object.fontSize / scale,
                        fontFamily: object.fontFamily,
                        color: object.fontColor,
                        fontStyle: object.fontStyle,
                        textDecoration: object.textDecoration,
                        fontWeight: object.fontWeight,
                    }}
                    onInput={handleTextChange}
                    suppressContentEditableWarning={true}
                >
                    {textContent}
                </div>
            ) : object.type === 'image' ? (
                <img className={style.image} src={object.imageUrl} alt="Картинка"/>
            ) : null}
        </div>
    )
}

export {ObjectComponent}
