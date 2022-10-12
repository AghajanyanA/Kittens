import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    categories: [],
    images: [],
    selectedCategoryID: 0
}


const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        isLoading: (state) => {
            state.isLoading = true
        },
        setCategories: (state, action) => {
            state.categories = action.payload
            state.isLoading = false
        },
        setSelectedCategoryID: (state, action) => {
            state.selectedCategoryID = action.payload
        },
        setImages: (state, action) => {
            state.images = action.payload
            state.isLoading = false
        },
        loadMore: (state, action) => {
            state.images = [...state.images, ...action.payload]
            state.isLoading = false
        }
    }
})

export const {isLoading, setCategories, setSelectedCategoryID, setImages, loadMore} = mainSlice.actions

export default mainSlice.reducer