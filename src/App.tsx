import { useState } from 'react'
import {PresentationTitle} from "./components/PresentationTitle.tsx";
import {updatePresentationTitle} from "./presentationUtils.ts";
import {Presentation} from './presentationTypes';
import { v4 as generateUuid } from 'uuid';

function App() {
    const [presentation, setPresentation] = useState<Presentation>({
        id: `presentation-${generateUuid()}`,
        title: 'Название презентации',
        author: 'Mikhail Kugelev',
        createdAt: new Date(),
        slides: [],
    });

    function handleTitleChange(presentation: Presentation, newTitle: string) {
        const updatedPresentation = updatePresentationTitle(presentation, newTitle);
        setPresentation(updatedPresentation);
    }

    return (
        <div className="app">
            <PresentationTitle
                presentation={presentation}
                title={presentation.title}
                onChangeTitle={handleTitleChange}
            />
        </div>
    );
}

export default App
