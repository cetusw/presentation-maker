import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import {addEditorChangeHandler} from './store/editor.ts';
import {loadFromLocalStorage} from './store/localStorage.ts';
import {editor} from './store/data/editorData.ts';

const root = createRoot(document.getElementById('root')!)

function render(): void {
    const editorFromLocalStorage = loadFromLocalStorage();
    root.render(
        <StrictMode>
            <App editor={editorFromLocalStorage !== null ? editorFromLocalStorage : editor}/>
        </StrictMode>,
    )
}

addEditorChangeHandler(render);
render();

export {
    render,
}