import {BackgroundType, Slide} from "../presentationTypes.ts";
// import TextField from '@mui/material/TextField';

type WorkSpaceProps = {
    slide: Slide;
};

function WorkSpace(props: WorkSpaceProps) {
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
        <div className="workspace">
            <div
                className="slide"
                style={{
                    background: renderBackground(props.slide.background),
                    width: '800px',
                    height: '450px',
                    border: '1px solid #000000',
                    position: 'relative',
                }}
            >
                {props.slide.objects.map((object, index) => (
                    <div
                        key={index}
                        style={{
                            position: 'absolute',
                            left: object.position.x,
                            top: object.position.y,
                            width: object.size.width,
                            height: object.size.height,
                        }}
                    >
                        {object.type === 'text' ? (
                            <p style={{fontSize: object.fontSize}}>
                                {object.content}
                            </p>
                        ) : object.type === 'image' ? (
                            <img src={object.imageUrl} alt="Картинка" style={{width: '100%', height: '100%'}}/>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    );
}

export {
    WorkSpace,
}