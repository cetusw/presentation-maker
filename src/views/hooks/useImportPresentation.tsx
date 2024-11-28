import { EditorType } from '../../store/presentationTypes.ts';
import {setEditor} from '../../store/editor.ts';
import {render} from '../../main.tsx';
import {validateEditor} from '../../utils/ajv.ts';
import React from 'react';

type UseImportPresentationProps  = {
    setError: (message: string) => void;
}

type UseImportPresentationResult = {
    onImportPresentation: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function useImportPresentation({ setError }: UseImportPresentationProps): UseImportPresentationResult {
    function onImportPresentation(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const editorData: EditorType = JSON.parse(e.target?.result as string);

                if (!validateEditor(editorData)) {
                    setError('Произошла ошибка при чтении файла');
                    return;
                }

                editorData.presentation.title = file.name.replace(/\.[^/.]+$/, '');
                setEditor(editorData);
                render();
            } catch {
                setError('Произошла ошибка при загрузке файла');
            }
        };
        event.target.value = '';
        reader.readAsText(file);
    }

    return {
        onImportPresentation,
    };
}
