import style from './ToolBar.module.css';
import Undo from '../../assets/icons/undo.svg';
import Redo from '../../assets/icons/redo.svg';
import AddSlide from '../../assets/icons/add.svg';
import AddText from '../../assets/icons/text.svg';
import AddImage from '../../assets/icons/image.svg';
import {ButtonComponent} from '../../components/ButtonComponent.tsx';

function ToolBar() {
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
                text={'Добавить слайд'}
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
