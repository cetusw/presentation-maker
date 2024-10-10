import {Presentation} from "../../store/presentationTypes.ts";
import style from './PresentationTitle.module.css';
import Logo from '../../assets/icons/logo.svg';

type PresentationTitleProps = {
    presentation: Presentation;
};

export function PresentationTitle({presentation}: PresentationTitleProps) {
    return (
        <div className={style.presentationTitle}>
            <img className={style.logo} src={Logo} alt={'logo'}/>
            <input
                className={style.input}
                defaultValue={presentation.title}
                placeholder={'Название презентации'}
            >
            </input>
        </div>
    )
}
