import {Presentation} from '../../store/presentationTypes.ts';
import {SlideComponent} from '../../components/SlideComponent.tsx';
import style from './Workspace.module.css';

type WorkSpaceProps = {
    presentation: Presentation;
    currentSlideId: string;
};

function WorkSpace({presentation, currentSlideId}: WorkSpaceProps) {
    const currentSlide = presentation.slides.find(slide => slide.id === currentSlideId);
    return (
        <div className="workspace">
            {currentSlide && presentation.slides.length > 0 ? (
                <div className={style.slide}>
                    <SlideComponent
                        className={style.slideComponent}
                        slide={currentSlide}
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

export {
    WorkSpace,
}