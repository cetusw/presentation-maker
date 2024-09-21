import {Presentation} from "../presentationTypes.ts";
import TextField from '@mui/material/TextField';

type PresentationTitleProps = {
    presentation: Presentation;
    title: string;
    onChangeTitle: (presentation: Presentation, newTitle: string) => void;
};

function PresentationTitle(props: PresentationTitleProps) {
    return (
        <div className="presentation-title">
            <TextField
                id="outlined-basic"
                variant="outlined"
                type="text"
                onChange={(e) => props.onChangeTitle(props.presentation, e.target.value)}
                placeholder={props.title}
            />
        </div>
    )
}

export {
    PresentationTitle,
}
