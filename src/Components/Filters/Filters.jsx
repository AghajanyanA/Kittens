import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getImages } from "../../redux/actions/mainActions"
import { setSelectedCategoryID } from "../../redux/slices/mainSlice"

export const Filters = () => {
    const [selectedCategory, setSelectedCategory] = useState(0)
    const dispatch = useDispatch()
    const categories = useSelector(state => state.main.categories)
    const activeCategory = useSelector(state => state.main.selectedCategoryID)
    console.log(activeCategory);

    const handleOnClick = e => {
        const category = +e.target.id
        setSelectedCategory(category)
        dispatch(getImages(category)) 
        dispatch(setSelectedCategoryID(category))
    }

    useEffect(() => {
       dispatch(getImages(selectedCategory))
    }, []) //eslint-disable-line

    return (
        <div className="filtersWrapper">
            <h5>Categories</h5>
            <div className="categories">
                <div id={0} className={activeCategory === 0 ? 'selectedCategory' : ''} onClick={handleOnClick}>None</div>
                {categories.map(data => <div className={'navBarItems ' + (activeCategory === data.id ? 'selectedCategory' : '') } onClick={handleOnClick} key={data.id} id={data.id}>{(data.name).charAt(0).toUpperCase() + (data.name).slice(1)}</div>)}
            </div>
        </div>
    )
}