import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Preloader } from "../../assets/Preloader"
import { loadMoreAction } from "../../redux/actions/mainActions"


export const Results = () => {
    const [page, setPage] = useState(1)
    const images = useSelector(state => state.main.images)
    const isLoading = useSelector(state => state.main.isLoading)
    const category = useSelector(state => state.main.selectedCategoryID)
    const dispatch = useDispatch()

    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1)
        dispatch(loadMoreAction(page, category))
    }

    return (
        <div className="resultsWrapper">
            {isLoading && <Preloader />}
            <div className="results">
                {images.map(i => <img key={i.id} src={i.url} alt='error' />)}
            </div>
            <button className="loadMoreButton" disabled={isLoading} onClick={handleLoadMore}>Load more</button>
        </div>
    )
}