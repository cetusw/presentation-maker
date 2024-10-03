import {Presentation} from "../../presentationTypes.ts";
import {SlideComponent} from "../../components/SlideComponent.tsx";

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