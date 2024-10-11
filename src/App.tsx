import {PresentationTitle} from './views/header/PresentationTitle.tsx';
import {SlideCollection} from './views/slideCollection/SlideCollection.tsx';
import {WorkSpace} from './views/workspace/WorkSpace.tsx';
import styles from './App.module.css';
// import {minDefaultPresentation} from './store/constants.ts';
import {defaultPresentation} from './store/constants.ts';
import {ToolBar} from './views/header/ToolBar.tsx';

export default function App() {
    return (
        <div className={styles.app}>
            <PresentationTitle
                presentation={defaultPresentation}
            />
            <ToolBar
            />
            <div className={styles.presentationPreview}>
                <SlideCollection
                    presentation={defaultPresentation}
                />
                <WorkSpace
                    presentation={defaultPresentation}
                    currentSlideIndex={1}
                />
            </div>
        </div>
    );
}
