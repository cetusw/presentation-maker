import style from './ToolBar.module.css';
import Undo from '../../assets/icons/undo.svg';
import Redo from '../../assets/icons/redo.svg';
import AddSlide from '../../assets/icons/add.svg';
import AddText from '../../assets/icons/text.svg';
import AddImage from '../../assets/icons/image.svg';
import RemoveSlide from '../../assets/icons/remove.png';
import {ButtonComponent} from '../../components/ButtonComponent.tsx';
import {addNewSlide} from '../../store/addNewSlide.ts';
import {dispatch} from '../../store/editor.ts';
import {removeSlides} from '../../store/removeSlide.ts';
import {addImageToSlide, addTextToSlide} from '../../store/addObjectToSlide.ts';
import {InputComponent} from '../../components/InputComponent.tsx';
import React from 'react';
import {loadImage} from '../../store/loadImage.ts';
import {editor} from '../../store/constants.ts';
import {updateBackgroundColor, updateBackgroundImage} from '../../store/updateSlideBackground.ts';

function ToolBar() {
    function onAddSlide() {
        dispatch(addNewSlide);
        console.log(editor.presentation.slides)
    }

    function onRemoveSlide() {
        dispatch(removeSlides);
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
            <ButtonComponent
                icon={RemoveSlide}
                alt={'remove slide'}
                className={style.addSlideButton}
                textClassName={style.buttonContent}
                onClick={onRemoveSlide}
                text={'Удалить слайд'}
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
        </div>
    )
}

export {
    ToolBar,
}
