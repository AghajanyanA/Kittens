import { instance } from "../../assets/axios"
import { isLoading, loadMore, setCategories, setImages } from "../slices/mainSlice"

export const IMAGE_LIMIT_COUNT = 10

export const getCategories = () => async dispatch => {
    try {
    dispatch(isLoading())
    const categoriesData = await instance.get('/categories')
    dispatch(setCategories(categoriesData.data))
    } catch (e) {
        console.error(e);
    }
}

export const getImages = (category) => async dispatch => {
    try {
    const unpassedCategories = category === 0 || category === undefined ? '' : `&category_ids=${category}`
    dispatch(isLoading())
    const images = await instance.get(`images/search?limit=${IMAGE_LIMIT_COUNT}${unpassedCategories}`)
    dispatch(setImages(images.data))
    } catch (e) {
        console.error(e);
    }
}

export const loadMoreAction = (page, category) => async dispatch => {

    try {
        const unpassedCategories = category === 0 || category === undefined ? '' : `&category_ids=${category}`
        dispatch(isLoading())
        const data = await instance.get(`images/search?limit=${IMAGE_LIMIT_COUNT}${unpassedCategories}&page=${page}`)
        dispatch(loadMore(data.data))
    } catch (e) {
        console.error(e);
    }
}