import {BackgroundType, Slide} from "../presentationTypes.ts";
// import TextField from '@mui/material/TextField';

type SlideComponentProps = {
    slide: Slide,
    scale: number,
};

export function SlideComponent(props: SlideComponentProps) {
    function renderBackground(background: BackgroundType) {
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
    }

    return (
        <div
            className="slide"
            style={{
                background: renderBackground(props.slide.background),
                width: `calc(70vw / ${props.scale})`,
                height: `calc((70vw * 9 / 16) / ${props.scale})`,
            }}
        >
            {props.slide.objects.map((object, index) => (
                <div
                    key={index}
                    style={{
                        position: 'absolute',
                        left: object.position.x / props.scale,
                        top: object.position.y / props.scale,
                        width: object.size.width / props.scale,
                        height: object.size.height / props.scale,
                    }}
                >
                    {object.type === 'text' ? (
                        <p style={{fontSize: object.fontSize / props.scale}}>
                            {object.content}
                        </p>
                    ) : object.type === 'image' ? (
                        <img src={object.imageUrl} alt="Картинка" style={{width: '100%', height: '100%'}}/>
                    ) : null}
                </div>
            ))}
        </div>
    );
}