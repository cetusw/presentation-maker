import style from './ToolBar.module.css';
import Undo from '../../assets/icons/undo.svg';
import Redo from '../../assets/icons/redo.svg';
import AddSlide from '../../assets/icons/add-slide.svg';
import AddText from '../../assets/icons/add-text.svg';
import AddImage from '../../assets/icons/add-image.svg';
import DownloadPresentation from '../../assets/icons/download.svg';
import ImportPresentation from '../../assets/icons/import.svg';
import {ButtonComponent} from '../../components/ButtonComponent.tsx';
import {addNewSlide} from '../../store/addNewSlide.ts';
import {dispatch, getEditor} from '../../store/editor.ts';
import {addImageToSlide, addTextToSlide} from '../../store/addObjectToSlide.ts';
import {InputComponent} from '../../components/InputComponent.tsx';
import {loadImage} from '../../store/loadImage.ts';
import {updateBackgroundColor, updateBackgroundImage} from '../../store/updateSlideBackground.ts';
import {exportToJson} from '../../store/exportToJson.ts';
import {useImportPresentation} from '../../store/hooks/useImportPresentation.tsx';

type ToolBarProps = {
    setError: (message: string) => void;
}

function ToolBar({ setError } : ToolBarProps) {
    const { onImportPresentation } = useImportPresentation({ setError });
    function onAddSlide() {
        dispatch(addNewSlide);
    }

    function onAddText() {
        dispatch(addTextToSlide);
    }

    function onAddImage(imageUrl: string) {
        loadImage(imageUrl)
            .then((image) => {
                dispatch(addImageToSlide, image);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    function onChangeBackgroundImage(imageUrl: string) {
        loadImage(imageUrl)
            .then((image) => {
                dispatch(updateBackgroundImage, image)
            })
            .catch((error) => {
                console.error(error);
            })
    }

    function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            if (event.target.id === 'add-image') {
                onAddImage(imageUrl)
            } else if (event.target.id === 'change-background-image') {
                onChangeBackgroundImage(imageUrl)
            }
        }
    }

    function onDownloadPresentation() {
        exportToJson(getEditor(), getEditor()?.presentation.title);
    }

    function onChangeBackgroundColor(event: React.ChangeEvent<HTMLInputElement>) {
        dispatch(updateBackgroundColor, event.target.value);
    }

    return (
        <div className={style.toolBar}>
            <ButtonComponent
                icon={Undo}
                alt={'undo'}
                className={style.undoButton}
            >
            </ButtonComponent>
            <ButtonComponent
                icon={Redo}
                alt={'redo'}
                className={style.redoButton}
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
                onClick={onDownloadPresentation}
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
        </div>
    )
}

export {
    ToolBar,
}
