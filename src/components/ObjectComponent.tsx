import {SlideObject} from '../store/presentationTypes.ts';
import style from './ObjectComponent.module.css';
import {handleKeyPress} from '../store/keyPressHandler.ts';
import {defaultText} from '../store/constants.ts';

type ObjectComponentProps = {
    object: SlideObject,
    scale: number,
    isSelected: boolean,
};

function ObjectComponent({object, scale, isSelected}: ObjectComponentProps) {
    const selectedObject = isSelected
        ? `${style.selectedObject}`
        : `${style.object}`;

    const objectStyles = {
        left: object.position.x / scale,
        top: object.position.y / scale,
        width: object.size.width / scale,
        height: object.size.height / scale,
    };

    return (
        <div
            className={selectedObject}
            style={{ ...objectStyles }}
            onKeyDown={() => handleKeyPress}
        >
            {object.type === 'text' ? (
                <textarea className={style.textField} style={{
                    fontSize: object.fontSize / scale,
                    backgroundColor: 'transparent',
                    border: 'none',
                }} defaultValue={object.content} placeholder={defaultText}/>
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