import {Slide} from "../presentationTypes.ts";
import style from '../styles/SlideCollection.module.css';
import {ObjectComponent} from "./ObjectComponent.tsx";
import {renderBackground} from "../presentationUtils.ts";

type SlideComponentProps = {
    slide: Slide,
    scale: number,
};

export function SlideComponent(props: SlideComponentProps) {
    return (
        <div
            className={style.slide}
            style={{
                background: renderBackground(props.slide.background),
                width: `calc(70vw / ${props.scale})`,
                height: `calc((70vw * 9 / 16) / ${props.scale})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {props.slide.objects.map((object) => (
                <ObjectComponent
                    object={object}
                    scale={props.scale}
                />
            ))}
        </div>
    );
}