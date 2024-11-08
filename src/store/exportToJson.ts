import {EditorType} from './presentationTypes.ts';

function exportToJson(data: EditorType | null, filename: string | undefined) {
    const json = JSON.stringify(data);

    const blob = new Blob([json], { type: 'application/json' });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    if (filename) {
        a.download = filename;
    }

    a.click();

    URL.revokeObjectURL(url);
}

export {
    exportToJson,
}