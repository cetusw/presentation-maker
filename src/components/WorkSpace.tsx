import {Presentation} from "../presentationTypes.ts";
import {SlideComponent} from "./SlideComponent.tsx";
// import TextField from '@mui/material/TextField';

type WorkSpaceProps = {
    presentation: Presentation;
    currentSlideIndex: number;
};

export function WorkSpace(props: WorkSpaceProps) {
    return (
        <div className="workspace">
            <SlideComponent
                slide={props.presentation.slides[props.currentSlideIndex]}
                scale={1}
            />
        </div>
    );
}