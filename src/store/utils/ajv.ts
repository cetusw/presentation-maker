import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import {editorSchema} from '../constants.ts';
import {EditorType} from '../presentationTypes.ts';

function validateEditor(editorData: EditorType) {
    const ajv = new Ajv();
    addFormats(ajv);
    const validate = ajv.compile(editorSchema);
    return validate(editorData);
}

export {
    validateEditor,
}
