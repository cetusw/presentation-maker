import {Presentation} from "../presentationTypes.ts";
// import TextField from '@mui/material/TextField';

type SlideCollectionProps = {
    presentation: Presentation;
};

function SlideCollection(props: SlideCollectionProps) {
    return (
        <div className="slide-collection">
            <ol>
                {props.presentation.slides.map((slide, index) => (
                    <li key={index} className="slide-thumbnail">
                        {slide.id}
                    </li>
                ))}
            </ol>
        </div>
    )
}

export {
    SlideCollection,
}