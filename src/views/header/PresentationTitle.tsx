import style from './PresentationTitle.module.css'
import Logo from '../../assets/icons/logo.svg'
import React from 'react'
import {useAppActions} from '../hooks/useAppActions.tsx'
import {useAppSelector} from '../hooks/useAppSelector.tsx'
import { useNavigate } from 'react-router'

function PresentationTitle() {
    const selection = useAppSelector((editor => editor.selection))
    const presentation = useAppSelector((editor => editor.presentation))
    const { updatePresentationTitle } = useAppActions()
    const navigate = useNavigate()
    function onTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
        updatePresentationTitle(event.target.value)
    }

    function enterFullScreen() {
        const docElement = document.documentElement
        docElement.requestFullscreen()
            .catch((error) => {
                console.error('Не удалось войти в полноэкранный режим', error)
            })
    }

    function handleSlideshowClick() {
        selection.selectedSlidesIds = [presentation.slides[0].id]
        selection.selectedObjectsIds = []
        enterFullScreen()
        navigate('/slideshow')
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
            <button
                className={style.slideshowButton}
                onClick={handleSlideshowClick}
            >Слайд-шоу
            </button>
        </div>
    )
}

export {
    PresentationTitle,
}
