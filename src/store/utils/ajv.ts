import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import {editorScheme} from '../data/editorScheme.ts';
import {EditorType} from '../presentationTypes.ts';

function validateEditor(editorData: EditorType) {
    const ajv = new Ajv();
    addFormats(ajv);
    const validate = ajv.compile(editorScheme);
    return validate(editorData);
}

export {
    validateEditor,
}
