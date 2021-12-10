import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {uploadCategories} from "../store/categoriesSlice";

const Categories = () => {
    const categories = useSelector(state => state.categories.categories)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(uploadCategories())
    }, [dispatch])

    return (
        <div>
            <ul>
            {categories.map(item=>{
                return(
                    <li>{item.name}</li>
                )
            })}
            </ul>
        </div>
    );
};

export default Categories;