import { useState } from 'react'
import {PresentationTitle} from "./components/PresentationTitle.tsx";
import {updatePresentationTitle} from "./presentationUtils.ts";
import {Presentation} from './presentationTypes';
import { v4 as generateUuid } from 'uuid';
import {SlideCollection} from "./components/SlideCollection.tsx";

function App() {
    const [presentation, setPresentation] = useState<Presentation>({
        id: `presentation-${generateUuid()}`,
        title: "Minimum Presentation",
        author: "Mikhail",
        createdAt: new Date("2024-09-05T00:00:00Z"),
        slides: [
            {
                id: "slide-1",
                background: {
                    type: "color",
                    color: "#FFFFFF"
                },
                objects: []
            }
        ]
    });

    function handleTitleChange(presentation: Presentation, newTitle: string) {
        const updatedPresentation = updatePresentationTitle(presentation, newTitle);
        setPresentation(updatedPresentation);
    }

    return (
        <div className="app">
            <PresentationTitle
                presentation={presentation}
                onChangeTitle={handleTitleChange}
            />
            <SlideCollection
                presentation={presentation}
            />
        </div>
    );
}

export default App
