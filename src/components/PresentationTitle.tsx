import {Presentation} from "../presentationTypes.ts";
import '../styles/presentation-title-style.css'
import TextField from '@mui/material/TextField';

type PresentationTitleProps = {
    presentation: Presentation;
};

export function PresentationTitle(props: PresentationTitleProps) {
    return (
        <div className="presentation-title">
            <TextField
                id="outlined-basic"
                variant="outlined"
                type="text"
                placeholder={props.presentation.title}
            />
        </div>
    )
}
