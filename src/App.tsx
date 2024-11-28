import {PresentationTitle} from './views/header/PresentationTitle.tsx';
import {SlideCollection} from './views/slideCollection/SlideCollection.tsx';
import {WorkSpace} from './views/workspace/WorkSpace.tsx';
import styles from './App.module.css';
import {ToolBar} from './views/header/ToolBar.tsx';
import {EditorType} from './store/presentationTypes.ts';
import {handleKeyPress} from './store/keyPressHandler.ts';
import {useEffect, useState} from 'react';
import {Toast} from './views/utils/Toast.tsx';
import {loadFromLocalStorage} from './store/localStorage.ts';

type AppProps = {
    editor: EditorType,
}

export default function App({editor}: AppProps) {
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const data = loadFromLocalStorage();
        if (!data) {
            setError('Ошибка при загрузке данных из local storage');
        }
    }, []);

    return (
        <div
            className={styles.app}
            onKeyDown={handleKeyPress}
        >
            <PresentationTitle
                presentation={editor.presentation}
            />
            <ToolBar
                setError={setError}
            />
            <div className={styles.presentationPreview}>
                <SlideCollection/>
                <WorkSpace/>
            </div>
            {error && <Toast message={error} onClose={() => setError(null)} />}
        </div>
    );
}
