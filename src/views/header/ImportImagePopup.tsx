import {useEffect, useState} from 'react'
import style from './ImportPhotosPopup.module.css'
import {ButtonComponent} from '../../components/ButtonComponent.tsx'
import Search from '../../assets/icons/search.svg'
import {fetchUnsplashImages} from '../../store/fetchUnsplashImages.ts'
import {Toast} from '../utils/Toast.tsx'
import {importImageType} from '../../utils/customTypes.ts'
import {useDispatch} from 'react-redux'
import {fetchUnsplashImage} from '../../middleware/fetchUnsplashImage.ts'
import {AnyAction} from 'redux'
import {editorReducer} from '../../store/redux/editorReducer.ts'
import {ThunkDispatch} from 'redux-thunk'
import {loadImage} from '../../store/loadImage.ts'

type ImageType = {
    id: string,
    urls: {
        thumb: string,
        full: string,
        small: string,
    },
    alt_description: string,
}

type ImportImagePopupProps = {
    imageType: importImageType,
    isClosed: boolean,
}

function ImportImagePopup({imageType, isClosed}: ImportImagePopupProps) {
    const [query, setQuery] = useState('')
    const [images, setImages] = useState<ImageType[]>([])
    const [searchLoading, setSearchLoading] = useState(false)
    const [imageToastLoading, setImageToastLoading] = useState<string | null>(null)
    const [positiveToastMessage, setPositiveToastMessage] = useState<string | null>(null)
    const [negativeToastMessage, setNegativeToastMessage] = useState<string | null>(null)
    type AppDispatch = ThunkDispatch<typeof editorReducer, unknown, AnyAction>
    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        setQuery('')
        setImages([])
        setSearchLoading(false)
        setImageToastLoading(null)
        setPositiveToastMessage(null)
        setNegativeToastMessage(null)
    }, [isClosed])

    function handleSearch() {
        setSearchLoading(true)
        fetchUnsplashImages(query)
            .then((images) => {
                setImages(images)
                setSearchLoading(false)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    function handleAddImage(imageURL: string) {
        setImageToastLoading('Загрузка...')
        loadImage(imageURL)
            .then((image) => {
                dispatch(fetchUnsplashImage(image, imageType))
                setImageToastLoading(null)
                setPositiveToastMessage('Какртинка добавлена успешно')
            })
            .catch((error) => {
                console.error(error)
                setNegativeToastMessage('Произошла ошибка при загрузке картинки')
            })
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
                    onClick={handleSearch}
                >
                </ButtonComponent>
            </div>
            <div className={style.imageList}>
                {!images.length
                    ? <p className={style.placeholder}>По запросу ничего не нашлось</p>
                    : (searchLoading
                            ? <p className={style.loading}>Загрузка...</p>
                            : images.map((image) => (
                                <div
                                    key={image.id}
                                    className={style.imageWrapper}
                                >
                                    <img
                                        className={style.imageBlock}
                                        src={image.urls.thumb}
                                        alt={image.alt_description}
                                        onClick={() => handleAddImage(imageType === 'slide-image' ? image.urls.small : image.urls.full)}
                                    />
                                </div>
                            ))
                    )
                }
            </div>
            {imageToastLoading && <Toast message={imageToastLoading} onClose={() => setImageToastLoading(null)} toastType={'positive'}/>}
            {positiveToastMessage && <Toast message={positiveToastMessage} onClose={() => setPositiveToastMessage(null)} toastType={'positive'}/>}
            {negativeToastMessage && <Toast message={negativeToastMessage} onClose={() => setNegativeToastMessage(null)} toastType={'negative'}/>}
        </div>
    )
}

export {
    ImportImagePopup,
}