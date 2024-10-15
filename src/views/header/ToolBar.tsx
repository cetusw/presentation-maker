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

function ToolBar() {
    function onAddSlide () {
        dispatch(addNewSlide);
    }

    function onRemoveSlide () {
        dispatch(removeSlides);
    }

    return (
        <div className={style.toolBar}>
            <ButtonComponent
                icon={Undo}
                className={style.undoButton}
            >
            </ButtonComponent>
            <ButtonComponent
                icon={Redo}
                className={style.redoButton}
            >
            </ButtonComponent>
            <div className={style.divider}></div>
            <ButtonComponent
                icon={AddSlide}
                className={style.addSlideButton}
                textClassName={style.buttonContent}
                onClick={onAddSlide}
                text={'Добавить слайд'}
            >
            </ButtonComponent>
            <ButtonComponent
                icon={RemoveSlide}
                className={style.addSlideButton}
                textClassName={style.buttonContent}
                onClick={onRemoveSlide}
                text={'Удалить слайд'}
            >
            </ButtonComponent>
            <div className={style.divider}></div>
            <ButtonComponent
                icon={AddText}
                className={style.addTextButton}
            >
            </ButtonComponent>
            <ButtonComponent
                icon={AddImage}
                className={style.addImageButton}
            >
            </ButtonComponent>
            <ButtonComponent
                className={style.addTextButton}
                textClassName={style.addTextButtonContent}
                text={'Задний фон'}
            >
            </ButtonComponent>
        </div>
    )
}

export {
    ToolBar,
}
