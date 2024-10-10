import {SlideObject} from "../store/presentationTypes.ts";
import style from '../views/slideCollection/SlideCollection.module.css';

type ObjectComponentProps = {
    object: SlideObject,
    scale: number,
};

export function ObjectComponent(props: ObjectComponentProps) {
    return (
        <div
            className={style.object}
            style={{
                left: props.object.position.x / props.scale,
                top: props.object.position.y / props.scale,
                width: props.object.size.width / props.scale,
                height: props.object.size.height / props.scale,
            }}
        >
            {props.object.type === 'text' ? (
                <p style={{fontSize: props.object.fontSize / props.scale}}>
                    {props.object.content}
                </p>
            ) : props.object.type === 'image' ? (
                <img
                    className={style.image}
                    src={props.object.imageUrl}
                    alt="Картинка"
                />
            ) : null}
        </div>
    );
}