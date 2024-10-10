import {Presentation} from "../../store/presentationTypes.ts";
import {SlideComponent} from "../../components/SlideComponent.tsx";
import style from './Workspace.module.css';

type WorkSpaceProps = {
    presentation: Presentation;
    currentSlideIndex: number;
};

export function WorkSpace(props: WorkSpaceProps) {
    return (
        <div className="workspace">
            {props.presentation.slides.length > 0 ? (
                <div className={style.slide}>
                    <SlideComponent
                        slide={props.presentation.slides[props.currentSlideIndex]}
                    />
                </div>
            ) : (
                <div className={style.placeholderSlide}>
                    <span className={style.placeholderSlideText}>Добавьте первый слайд</span>
                </div>
            )}
        </div>
    );
}