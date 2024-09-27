import {PresentationTitle} from "./components/PresentationTitle.tsx";
import {SlideCollection} from "./components/SlideCollection.tsx";
import {WorkSpace} from "./components/WorkSpace.tsx";
import styles from './styles/App.module.css';
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
