import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import {addEditorChangeHandler} from './store/editor.ts';
import {loadFromLocalStorage} from './store/localStorage.ts';
import {defaultEditor} from './store/data/editorData.ts';
import {Provider} from 'react-redux';
import {store} from './store/redux/store.ts';

const root = createRoot(document.getElementById('root')!)

function render(): void {
    const editorFromLocalStorage = loadFromLocalStorage();
    root.render(
        <StrictMode>
            <Provider store={store}>
                <App editor={editorFromLocalStorage !== null ? editorFromLocalStorage : defaultEditor}/>
            </Provider>
        </StrictMode>,

    )
}

addEditorChangeHandler(render);
render();

export {
    render,
}