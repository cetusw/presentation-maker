import {useState} from 'react'
import style from './ImportPhotosPopup.module.css'
import {ButtonComponent} from '../../components/ButtonComponent.tsx'
import Search from '../../assets/icons/search.svg'
const UNSPLASH_API_URL = 'https://api.unsplash.com/search/photos'
const ACCESS_KEY = 'SdCOXWjZuNC3GMWYETHi4PY3pNKT9qEP221YxY8aJ6A'

function ImportPhotosPopup() {
    const [query, setQuery] = useState('')
    const [images, setImages] = useState<any[]>([])
    const [loading, setLoading] = useState(false)

    async function fetchImages() {
        setLoading(true)
        try {
            const response = await fetch(`${UNSPLASH_API_URL}?query=${query}&page=1&per_page=10&client_id=${ACCESS_KEY}`)
            if (!response.ok) {
                throw new Error(`Ошибка ${response.status}: ${response.statusText}`)
            }

            const data = await response.json()
            setImages(data.results)
        } catch (error) {
            console.error('Ошибка при загрузке фотографий:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={style.importImagePopup}>
            <h1 className={style.popupTitle}>Unsplash</h1>
            <div className={style.searchBlock}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={'Поиск...'}
                    className={style.searchInput}
                />
                <ButtonComponent
                    icon={Search}
                    alt={'search'}
                    className={style.searchButton}
                    onClick={fetchImages}
                >
                </ButtonComponent>
            </div>
            <div className={style.imageList}>
                {!images.length
                    ? <p className={style.placeholder}>По запосу ничего не нашлось</p>
                    : (loading
                        ? <p className={style.loading}>Загрузка...</p>
                        : images.map((image) => (
                            <div className={style.imageWrapper}>
                                <img
                                    className={style.imageBlock}
                                    key={image.id}
                                    src={image.urls.thumb}
                                    alt={image.alt_description}
                                />
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}

export {
    ImportPhotosPopup,
}