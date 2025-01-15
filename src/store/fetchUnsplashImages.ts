import {ACCESS_KEY, UNSPLASH_API_URL} from './data/config.ts'

async function fetchUnsplashImages(query: string) {
    try {
        const response = await fetch(`${UNSPLASH_API_URL}?query=${query}&page=1&per_page=10&client_id=${ACCESS_KEY}`)
        if (!response.ok) {
            console.error('Ошибка при получении картинок')
        }

        const data = await response.json()
        return data.results
    } catch (error) {
        console.error('Ошибка при загрузке фотографий:', error)
    }
}

export {
    fetchUnsplashImages,
}