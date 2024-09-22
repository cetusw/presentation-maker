import {Presentation} from "../presentationTypes.ts";
import '../styles/slide-collection-style.css'
import {SlideComponent} from "./SlideComponent.tsx";
// import TextField from '@mui/material/TextField';

type SlideCollectionProps = {
    presentation: Presentation;
};

export function SlideCollection(props: SlideCollectionProps) {
    return (
        <ol className="slide-collection">
            {props.presentation.slides.map((slide, index) => (
                <li key={index} className="slide-thumbnail">
                    <SlideComponent
                        slide={slide}
                        scale={5}
                    />
                </li>
            ))}
        </ol>
    )
}