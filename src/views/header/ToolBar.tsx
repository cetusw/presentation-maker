import React, {useContext, useEffect, useState} from 'react'
import style from './ToolBar.module.css'
import Undo from '../../assets/icons/undo.svg'
import Redo from '../../assets/icons/redo.svg'
import Add from '../../assets/icons/add.svg'
import AddText from '../../assets/icons/add-text.svg'
import HandleImage from '../../assets/icons/add-image.svg'
import DownloadPresentation from '../../assets/icons/download.svg'
import ImportPresentation from '../../assets/icons/import.svg'
import ExportPresentationInPDF from '../../assets/icons/exportInPDF.svg'
import Bold from '../../assets/icons/bold.svg'
import Italic from '../../assets/icons/italic.svg'
import Underline from '../../assets/icons/underline.svg'
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
import {Popup} from '../../components/Popup.tsx'
import {Popover} from '../../components/Popover.tsx'
import {SelectComponent} from '../../components/SelectComponent.tsx'
import {availableFontFamilies, availableFontSizes} from '../../store/data/editorData.ts'
import {ImportPhotosPopup} from './ImportPhotosPopup.tsx'

type ToolBarProps = {
    setError: (message: string) => void
}

function ToolBar({ setError } : ToolBarProps) {
    const { onImportPresentation } = useImportPresentation({ setError })
    const editor = useAppSelector((editor => editor))
    const history = useContext(HistoryContext)
    const [isImportImagePopupOpen, setIsImportImagePopupOpen] = useState(false)
    const [italic, setItalic] = useState<boolean>(false)
    const [underline, setUnderline] = useState<boolean>(false)
    const [bold, setBold] = useState<boolean>(false)
    const [fontFamily, setFontFamily] = useState<string>('Roboto')
    const [fontSize, setFontSize] = useState<string>('14')

    useEffect(() => {
        const slideId = editor.selection.selectedSlidesIds[0]
        const currentSlide = editor.presentation.slides.find(slide => slide.id === slideId)

        if (!currentSlide) {
            return
        }

        const objectId = editor.selection.selectedObjectsIds[0]
        const currentObject = currentSlide.objects.find(object => object.id === objectId)

        if (!currentObject || currentObject.type !== 'text') {
            return
        }

        setItalic(currentObject.fontStyle === 'italic')
        setUnderline(currentObject.textDecoration === 'underline')
        setBold(currentObject.fontWeight === 800)
        setFontFamily(currentObject.fontFamily)
        setFontSize(currentObject.fontSize.toString())


    }, [editor.selection])

    const {
        setEditor,
        addSlide,
        addTextToSlide,
        addImageToSlide,
        updateBackgroundImage,
        updateBackgroundColor,
        removeObjectFromSlide,
        removeSlide,
        updateTextFontFamily,
        updateTextFontStyle,
        updateTextDecoration,
        updateTextFontWeight,
        updateTextFontSize,
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
        editor.selection.selectedObjectsIds = []
        try {
            await exportSlidesToPDF(editor.presentation.slides, editor.presentation.title)
        } catch (error) {
            console.error('Ошибка при экспорте:', error)
        }
    }

    function onOpenImportImage() {
        setIsImportImagePopupOpen(true)
    }

    function onCloseImportImage() {
        setIsImportImagePopupOpen(false)
    }

    function onChangeFontFamily(event: React.ChangeEvent<HTMLSelectElement>){
        updateTextFontFamily(event.target.value)
    }

    function onChangeFontSize(event: React.ChangeEvent<HTMLSelectElement>) {
        updateTextFontSize(event.target.value)
    }

    function onItalic() {
        if (italic) {
            updateTextFontStyle('')
        } else {
            updateTextFontStyle('italic')
        }
    }

    function onUnderline() {
        if (underline){
            updateTextDecoration('')
        } else {
            updateTextDecoration('underline')
        }
    }

    function onBold() {
        if (bold){
            updateTextFontWeight(200)
        } else {
            updateTextFontWeight(800)
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
                icon={Add}
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
            <Popover content={
                <ButtonComponent
                    icon={HandleImage}
                    alt={'handle image'}
                    className={style.handleImage}
                >
                </ButtonComponent>
            }>
                <InputComponent
                    inputId={'add-image'}
                    type={'file'}
                    icon={Add}
                    alt={'add image'}
                    text={'Загрузить'}
                    textClassName={style.buttonContent}
                    className={style.addImageButton}
                    onChange={handleImageUpload}
                >
                </InputComponent>
                <ButtonComponent
                    icon={ImportPresentation}
                    alt={'import image'}
                    text={'Импортировать'}
                    textClassName={style.buttonContent}
                    className={style.importImageButton}
                    onClick={onOpenImportImage}
                >
                </ButtonComponent>
            </Popover>
            <div className={style.divider}></div>
            <SelectComponent
                options={availableFontFamilies}
                onChange={onChangeFontFamily}
                startValue={fontFamily}
            >
            </SelectComponent>
            <SelectComponent
                options={availableFontSizes}
                onChange={onChangeFontSize}
                startValue={fontSize}
            >
            </SelectComponent>
            <ButtonComponent
                icon={Bold}
                alt={'bold'}
                className={style.boldButton}
                onClick={onBold}
            >
            </ButtonComponent>
            <ButtonComponent
                icon={Italic}
                alt={'italic'}
                className={style.boldButton}
                onClick={onItalic}
            >
            </ButtonComponent>
            <ButtonComponent
                icon={Underline}
                alt={'underline'}
                className={style.boldButton}
                onClick={onUnderline}
            >
            </ButtonComponent>
            <Popover content={
                <ButtonComponent
                    text={'Фон слайда'}
                    className={style.slideBackgroundButton}
                >
                </ButtonComponent>
            }>
                <InputComponent
                    inputId={'change-background-color'}
                    type={'color'}
                    className={style.changeBackgroundColorButton}
                    text={'Цвет фона'}
                    onChange={onChangeBackgroundColor}
                >
                </InputComponent>
                <InputComponent
                    inputId={'change-background-image'}
                    type={'file'}
                    text={'Картинка фона'}
                    className={style.changeImageBackgroundButton}
                    onChange={handleImageUpload}
                >
                </InputComponent>
            </Popover>
            <div className={style.divider}></div>
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
            <Popup
                isOpen={isImportImagePopupOpen}
                onClose={onCloseImportImage}
            >
                {ImportPhotosPopup()}
            </Popup>
        </div>
    )
}

export {
    ToolBar,
}
