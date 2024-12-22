import style from './PresentationTitle.module.css'
import Logo from '../../assets/icons/logo.svg'
import React from 'react'
import {useAppActions} from '../hooks/useAppActions.tsx'
import {useAppSelector} from '../hooks/useAppSelector.tsx'
import {LinkButtonComponent} from '../../components/LinkButtonComponent.tsx'

function PresentationTitle() {
    const presentation = useAppSelector((editor => editor.presentation))
    const { updatePresentationTitle } = useAppActions()
    function onTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
        updatePresentationTitle(event.target.value)
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
            <LinkButtonComponent
                text={'Слайд-шоу'}
                className={style.slideshowButton}
                link={'/slideshow'}
            >
            </LinkButtonComponent>
        </div>
    )
}

export {
    PresentationTitle,
}
