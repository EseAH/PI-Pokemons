import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, filterType, orderName } from "../redux/actions";

export default function Filters({setCurrentPage, setOrder}) {
    const dispatch = useDispatch()
    const allTypes = useSelector((state) => state.types)

    function handleOrderName(e) {
        e.preventDefault();
        dispatch(orderName(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
      };

    const handleFilterType = (e) => {
        e.preventDefault()
        dispatch(filterType(e.target.value)); 
        //setCurrentPage(1);
    }
    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])
    
    return (
        <div>
            <div>
                <label>Sort name </label>
                <select onChange={e => handleOrderName(e)}>
                    <option hidden selected>Alphabetic order:</option>
                    <option value="asc">A - Z</option>
                    <option value="desc">Z - A</option>
                </select>
            </div>
            <div>
            <label>Types </label>
            <select onChange={e => handleFilterType(e)}>
                <option value='all'>ALL</option>
                {
                allTypes?.map(e => {
                    return (
                    <option key={e.id} value={e.name}>{e.name.toUpperCase()}</option>
                    )
                })
                }
            </select>
            </div>
        </div>
    )
}