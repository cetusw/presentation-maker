import {Presentation} from '../../store/presentationTypes.ts';
import style from './PresentationTitle.module.css';
import Logo from '../../assets/icons/logo.svg';
import React from 'react';
import {dispatch} from '../../store/editor.ts';
import {updatePresentationTitle} from '../../store/updatePresentationTitle.ts';

type PresentationTitleProps = {
    presentation: Presentation;
};

function PresentationTitle({presentation}: PresentationTitleProps) {
    function onTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
        dispatch(updatePresentationTitle, event.target.value);
    }

    return (
        <div className={style.presentationTitle}>
            <img className={style.logo} src={Logo} alt={'logo'}/>
            <input
                className={style.input}
                value={presentation.title}
                placeholder={'Название презентации'}
                onChange={onTitleChange}
            >
            </input>
        </div>
    )
}

export {
    PresentationTitle,
}
