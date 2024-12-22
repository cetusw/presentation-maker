import {jsPDF} from 'jspdf'
import html2canvas from 'html2canvas'
import {SlideComponent} from '../components/SlideComponent'
import {Slide} from '../store/presentationTypes'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'
import {store} from '../store/redux/store.ts'
import {flushSync} from 'react-dom'

async function exportSlidesToPDF(slides: Slide[], fileName: string) {
    if (slides.length < 1) {
        alert('Презентация пустая. Добавьте первый слайд')
        return
    }
    const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [960, 540],
    })

    const container = document.createElement('div')
    container.style.position = 'absolute'
    container.style.top = '-9999px'
    container.style.left = '-9999px'
    container.style.width = '960px'
    container.style.height = '540px'
    container.style.backgroundColor = 'white'
    document.body.appendChild(container)

    try {
        for (let i = 0; i < slides.length; i++) {
            const slide = slides[i]

            const root = createRoot(container)
            flushSync(() => {
                root.render(
                    <Provider store={store}>
                        <SlideComponent slide={slide}/>
                    </Provider>
                )
            })

            const canvas = await html2canvas(container, {
                width: 960,
                height: 540,
                scale: 2,
                allowTaint: true,
                backgroundColor: null
            })

            const imgData = canvas.toDataURL('image/png')

            if (i > 0) {
                pdf.addPage()
            }
            pdf.addImage(imgData, 'PNG', 0, 0, 960, 540)

            root.unmount()
        }

        pdf.save(`${fileName}.pdf`)
    } finally {
        document.body.removeChild(container)
    }
}


export {
    exportSlidesToPDF,
}
