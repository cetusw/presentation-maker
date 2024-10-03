import {Presentation} from "../../presentationTypes.ts";
import styles from './Header.module.css';
import TextField from '@mui/material/TextField';

type PresentationTitleProps = {
    presentation: Presentation;
};

export function PresentationTitle(props: PresentationTitleProps) {
    return (
        <div className={styles.presentationTitle}>
            <TextField
                id="outlined-basic"
                variant="outlined"
                type="text"
                placeholder={props.presentation.title}
            />
        </div>
    )
}
