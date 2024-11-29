import {PresentationTitle} from './views/header/PresentationTitle.tsx'
import {SlideCollection} from './views/slideCollection/SlideCollection.tsx'
import {WorkSpace} from './views/workspace/WorkSpace.tsx'
import styles from './App.module.css'
import {ToolBar} from './views/header/ToolBar.tsx'
import {useEffect, useState} from 'react'
import {Toast} from './views/utils/Toast.tsx'
import {loadFromLocalStorage} from './store/localStorage.ts'
import {HistoryType} from './utils/history.ts'
import {HistoryContext} from './views/hooks/historyContext.ts'

type AppProps = {
    history: HistoryType,
}

export default function App({ history }: AppProps) {
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const data = loadFromLocalStorage()
        if (!data) {
            setError('Ошибка при загрузке данных из local storage')
        }
    }, [])

    return (
        <HistoryContext.Provider value={history}>
            <div className={styles.app}>
                <PresentationTitle/>
                <ToolBar setError={setError}/>
                <div className={styles.presentationPreview}>
                    <SlideCollection/>
                    <WorkSpace/>
                </div>
                {error && <Toast message={error} onClose={() => setError(null)}/>}
            </div>
        </HistoryContext.Provider>
    )
}
