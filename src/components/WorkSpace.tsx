import {Slide} from "../presentationTypes.ts";
import {SlideComponent} from "./SlideComponent.tsx";
// import TextField from '@mui/material/TextField';

type WorkSpaceProps = {
    slide: Slide;
};

export function WorkSpace(props: WorkSpaceProps) {
    return (
        <div className="workspace">
            <SlideComponent
                slide={props.slide}
                scale={1}
            />
        </div>
    );
}