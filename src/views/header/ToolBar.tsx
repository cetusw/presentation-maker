import React, {useEffect} from 'react'
import style from './ToolBar.module.css'
import Undo from '../../assets/icons/undo.svg'
import Redo from '../../assets/icons/redo.svg'
import AddSlide from '../../assets/icons/add-slide.svg'
import AddText from '../../assets/icons/add-text.svg'
import AddImage from '../../assets/icons/add-image.svg'
import DownloadPresentation from '../../assets/icons/download.svg'
import ImportPresentation from '../../assets/icons/import.svg'
import ExportPresentationInPDF from '../../assets/icons/exportInPDF.svg'
import {ButtonComponent} from '../../components/ButtonComponent.tsx'
import {InputComponent} from '../../components/InputComponent.tsx'
import {loadImage} from '../../store/loadImage.ts'
import {exportToJson} from '../../store/exportToJson.ts'
import {useImportPresentation} from '../hooks/useImportPresentation.tsx'
import {useAppActions} from '../hooks/useAppActions.tsx'
import {useAppSelector} from '../hooks/useAppSelector.tsx'
import {store} from '../../store/redux/store.ts'
import {HistoryContext} from '../hooks/historyContext.ts'
import {exportSlidesToPDF} from '../../utils/exportSlidesToPDF.tsx'

type ToolBarProps = {
    setError: (message: string) => void
}

function ToolBar({ setError } : ToolBarProps) {
    const { onImportPresentation } = useImportPresentation({ setError })
    const editor = useAppSelector((editor => editor))
    const history = React.useContext(HistoryContext)

    const {
        setEditor,
        addSlide,
        addTextToSlide,
        addImageToSlide,
        updateBackgroundImage,
        updateBackgroundColor,
        removeObjectFromSlide,
        removeSlide,
    } = useAppActions()

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress)
        return () => {
            window.removeEventListener('keydown', handleKeyPress)
        }
    })

    function onRemoveObject() {
        removeObjectFromSlide()
    }

    function onRemoveSlide() {
        removeSlide()
    }

    function handleKeyPress(event: KeyboardEvent) {
        if (event.key === 'Delete') {
            const state = store.getState()
            const hasSelectedObjects = state.selection.selectedObjectsIds?.length !== 0
            const hasSelectedSlides = state.selection.selectedSlidesIds?.length !== 0

            if (hasSelectedObjects && hasSelectedSlides) {
                onRemoveObject()
            } else if (!hasSelectedObjects && hasSelectedSlides) {
                onRemoveSlide()
            }
        }

        if ((event.ctrlKey || event.metaKey) && event.key === 'z') {
            event.preventDefault()
            onUndo()
        }

        if ((event.ctrlKey || event.metaKey) && event.key === 'y') {
            event.preventDefault()
            onRedo()
        }
    }

    function onAddSlide() {
        addSlide()
    }

    function onAddText() {
        addTextToSlide()
    }

    function onAddImage(imageUrl: string) {
        loadImage(imageUrl)
            .then((image) => {
                addImageToSlide(image)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    function onChangeBackgroundImage(imageUrl: string) {
        loadImage(imageUrl)
            .then((image) => {
                updateBackgroundImage(image)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0]
        if (file) {
            const imageUrl = URL.createObjectURL(file)
            if (event.target.id === 'add-image') {
                onAddImage(imageUrl)
            } else if (event.target.id === 'change-background-image') {
                onChangeBackgroundImage(imageUrl)
            }
        }
    }

    function onDownloadEditor() {
        exportToJson(editor, editor.presentation.title)
    }

    function onChangeBackgroundColor(event: React.ChangeEvent<HTMLInputElement>) {
        updateBackgroundColor(event.target.value)
    }

    function onUndo() {
        const newEditor = history.undo()
        if (newEditor) {
            setEditor(newEditor)
        }
    }

    function onRedo() {
        const newEditor = history.redo()
        if (newEditor) {
            setEditor(newEditor)
        }
    }

    async function onExportPresentation() {
        try {
            await exportSlidesToPDF(editor.presentation.slides, editor.presentation.title)
        } catch (error) {
            console.error('Ошибка при экспорте:', error)
        }
    }

    return (
        <div className={style.toolBar}>
            <ButtonComponent
                icon={Undo}
                alt={'undo'}
                className={style.undoButton}
                onClick={onUndo}
            >
            </ButtonComponent>
            <ButtonComponent
                icon={Redo}
                alt={'redo'}
                className={style.redoButton}
                onClick={onRedo}
            >
            </ButtonComponent>
            <div className={style.divider}></div>
            <ButtonComponent
                icon={AddSlide}
                alt={'add slide'}
                className={style.addSlideButton}
                textClassName={style.buttonContent}
                onClick={onAddSlide}
                text={'Добавить слайд'}
            >
            </ButtonComponent>
            <div className={style.divider}></div>
            <ButtonComponent
                icon={AddText}
                alt={'add text'}
                className={style.addTextButton}
                onClick={onAddText}
            >
            </ButtonComponent>
            <InputComponent
                inputId={'add-image'}
                type={'file'}
                icon={AddImage}
                alt={'add image'}
                className={style.addImageButton}
                onChange={handleImageUpload}
            >
            </InputComponent>
            <InputComponent
                inputId={'change-background-color'}
                type={'color'}
                className={style.addTextButton}
                textClassName={style.addTextButtonContent}
                text={'Цвет фона'}
                onChange={onChangeBackgroundColor}
            >
            </InputComponent>
            <InputComponent
                inputId={'change-background-image'}
                type={'file'}
                text={'Картинка фона'}
                className={style.addImageButton}
                onChange={handleImageUpload}
            >
            </InputComponent>
            <ButtonComponent
                icon={DownloadPresentation}
                alt={'download presentation'}
                className={style.downloadButton}
                onClick={onDownloadEditor}
            >
            </ButtonComponent>
            <InputComponent
                inputId={'import-presentation'}
                type={'file'}
                icon={ImportPresentation}
                className={style.importButton}
                onChange={onImportPresentation}
            >
            </InputComponent>
            <ButtonComponent
                icon={ExportPresentationInPDF}
                alt={'export presentation in pdf'}
                className={style.exportButton}
                onClick={onExportPresentation}
            >
            </ButtonComponent>
        </div>
    )
}

export {
    ToolBar,
}
