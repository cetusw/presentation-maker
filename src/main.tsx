import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {Provider} from 'react-redux'
import {store} from './store/redux/store.ts'

const root = createRoot(document.getElementById('root')!)

function render(): void {
    root.render(
        <StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </StrictMode>,
    )
}

render()

export {
    render,
}