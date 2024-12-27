import style from './SelectComponent.module.css'
import {useAppSelector} from '../views/hooks/useAppSelector.tsx'
import React, {useEffect, useState} from 'react'

type SelectComponentProps = {
    options: string[]
    className?: string
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

function SelectComponent({ options, className, onChange }: SelectComponentProps) {
    const selectClass = `${style.select} ${className || ''}`
    const presentation = useAppSelector(editor => editor.presentation)
    const selection = useAppSelector(editor => editor.selection)
    const [startValue, setStartValue] = useState<string>('')

    useEffect(() => {
        const slideToEditId = selection.selectedSlidesIds[0]
        const slideToEdit = presentation.slides.find(slide => slide.id === slideToEditId)

        if (!slideToEdit) {
            return
        }

        const objectToEditId = selection.selectedObjectsIds[0]
        const objectToEdit = slideToEdit.objects.find(object => object.id === objectToEditId)

        if (!objectToEdit || objectToEdit.type !== 'text') {
            return
        }

        setStartValue(objectToEdit.fontFamily)

    }, [selection])

    return (
        <select className={selectClass} onChange={onChange} value={startValue}>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    )
}

export {
    SelectComponent,
}