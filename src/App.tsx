import {PresentationTitle} from "./views/header/PresentationTitle.tsx";
import {SlideCollection} from "./views/slideCollection/SlideCollection.tsx";
import {WorkSpace} from "./views/workspace/WorkSpace.tsx";
import styles from './App.module.css';
import {defaultPresentation} from "./constants.ts";

export default function App() {
    return (
        <div className={styles.app}>
            <PresentationTitle
                presentation={defaultPresentation}
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
