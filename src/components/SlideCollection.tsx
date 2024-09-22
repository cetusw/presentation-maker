import {BackgroundType, Presentation} from "../presentationTypes.ts";
// import TextField from '@mui/material/TextField';

type SlideCollectionProps = {
    presentation: Presentation;
};

function SlideCollection(props: SlideCollectionProps) {
    const renderBackground = (background: BackgroundType) => {
        switch (background.type) {
            case 'color':
                return background.color;
            case 'image':
                return `url(${background.imageUrl})`;
            case 'gradient':
                return `linear-gradient(${background.firstColor}, ${background.secondColor})`;
            default:
                return 'white';
        }
    };

    return (
        <ol className="slide-collection">
            {props.presentation.slides.map((slide, index) => (
                <li key={index} className="slide-thumbnail">
                    <div
                        className="slide-preview"
                        style={{
                            background: renderBackground(slide.background),
                            width: '160px',
                            height: '90px',
                            border: '1px solid #000000',
                            position: 'relative',
                        }}
                    >
                        {slide.objects.map((object, index) => (
                            <div
                                key={index}
                                style={{
                                    position: 'absolute',
                                    left: object.position.x / 5,
                                    top: object.position.y / 5,
                                    width: object.size.width / 5,
                                    height: object.size.height / 5,
                                }}
                            >
                                {object.type === 'text' ? (
                                    <p style={{fontSize: object.fontSize / 5}}>
                                        {object.content}
                                    </p>
                                ) : object.type === 'image' ? (
                                    <img src={object.imageUrl} alt="Картинка" style={{width: '100%', height: '100%'}}/>
                                ) : null}
                            </div>
                        ))}
                    </div>
                </li>
            ))}
        </ol>
    )
}

export {
    SlideCollection,
}