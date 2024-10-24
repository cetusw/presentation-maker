import {PresentationTitle} from './views/header/PresentationTitle.tsx';
import {SlideCollection} from './views/slideCollection/SlideCollection.tsx';
import {WorkSpace} from './views/workspace/WorkSpace.tsx';
import styles from './App.module.css';
import {ToolBar} from './views/header/ToolBar.tsx';
import {EditorType} from './store/presentationTypes.ts';
import {handleKeyPress} from './store/keyPressHandler.ts';

type AppProps = {
    editor: EditorType,
}

export default function App({editor}: AppProps) {
    return (
        <div
            className={styles.app}
            onKeyDown={handleKeyPress}
        >
            <PresentationTitle
                presentation={editor.presentation}
            />
            <ToolBar
            />
            <div className={styles.presentationPreview}>
                <SlideCollection
                    presentation={editor.presentation}
                    selection={editor.selection}
                />
                <WorkSpace
                    editor={editor}
                    currentSlideId={editor.selection.selectedSlidesIds[0]}
                />
            </div>
        </div>
    );
}
