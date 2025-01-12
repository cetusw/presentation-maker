import style from './GradientPopup.module.css'
import {useAppActions} from '../hooks/useAppActions.tsx'
import {useState} from 'react'

function GradientPopup() {
    const { updateBackgroundGradient } = useAppActions()

    const [currentFirstColor, setFirstColor] = useState<string>('#000000')
    const [currentSecondColor, setSecondColor] = useState<string>('#FFFFFF')

    function onUpdateGradient() {
        updateBackgroundGradient({
            firstColor: currentFirstColor,
            secondColor: currentSecondColor
        })
    }
    return (
        <div className={style.importImagePopup}>
            <h1 className={style.popupTitle}>Выберите цвета градиента</h1>
            <div>
                <label className={style.label}>Первый цвет:</label>
                <input
                    type="color"
                    className={style.input}
                    value={currentFirstColor}
                    onChange={(e) => setFirstColor(e.target.value)}
                />
            </div>
            <br/>
            <div>
                <label className={style.label}>Второй цвет:</label>
                <input
                    type="color"
                    className={style.input}
                    value={currentSecondColor}
                    onChange={(e) => setSecondColor(e.target.value)}
                />
            </div>
            <br/>
            <div className={style.buttonWrapper}>
                <button
                    className={style.submitButton}
                    onClick={onUpdateGradient}
                >
                    Установить градиент
                </button>
            </div>
        </div>
    )
}

export {
    GradientPopup,
}