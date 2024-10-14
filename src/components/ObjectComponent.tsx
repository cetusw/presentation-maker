import {SlideObject} from '../store/presentationTypes.ts';
import style from '../views/slideCollection/SlideCollection.module.css';

type ObjectComponentProps = {
    object: SlideObject,
    scale: number,
};

function ObjectComponent({object, scale}: ObjectComponentProps) {
    return (
        <div
            className={style.object}
            style={{
                left: object.position.x / scale,
                top: object.position.y / scale,
                width: object.size.width / scale,
                height: object.size.height / scale,
            }}
        >
            {object.type === 'text' ? (
                <p style={{fontSize: object.fontSize / scale}}>
                    {object.content}
                </p>
            ) : object.type === 'image' ? (
                <img
                    className={style.image}
                    src={object.imageUrl}
                    alt="Картинка"
                />
            ) : null}
        </div>
    );
}

export {
    ObjectComponent,
}