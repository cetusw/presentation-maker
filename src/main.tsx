import ReactDOM from 'react';
import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { getEditor } from './store/editor.ts';

// ReactDOM.render(
//     <React.StrictMode>
//         <App editor={getEditor()}/>
//     </React.StrictMode>,
//     document.getElementById('root')
// )


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
