import style from './ToolBar.module.css';
import Undo from '../../assets/icons/undo.svg';
import Redo from '../../assets/icons/redo.svg';
import AddSlide from '../../assets/icons/add.svg';
import {ButtonComponent} from "../../components/ButtonComponent.tsx";

export function ToolBar() {
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
            <ButtonComponent
                icon={AddSlide}
                className={style.addSlideButton}
                text={'Добавить слайд'}
            >
            </ButtonComponent>
        </div>
    )
}
