import {PresentationTitle} from "./components/PresentationTitle.tsx";
import {SlideCollection} from "./components/SlideCollection.tsx";
import {WorkSpace} from "./components/WorkSpace.tsx";
import './styles/app-style.css'
import {defaultPresentation} from "./constants.ts";

export default function App() {
    return (
        <div className="app">
            <PresentationTitle
                presentation={defaultPresentation}
            />
            <div className="presentation-preview">
                <SlideCollection
                    presentation={defaultPresentation}
                />
                <WorkSpace
                    slide={defaultPresentation.slides[1]}
                />
            </div>
        </div>
    );
}
