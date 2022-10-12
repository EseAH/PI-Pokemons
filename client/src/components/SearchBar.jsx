import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonName, setCurrentPage } from "../redux/actions";

export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    const handleInputChange = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name) return alert("Enter pokemon name")
        dispatch(getPokemonName(name))
        setName("")
        dispatch(setCurrentPage(1))
    }
    return (
        <div>
            <input type='text'
            placeholder="Search..."
            onChange={(e) => handleInputChange(e)}
            />
            <button type="submit" onClick={(e) => handleSubmit(e)}>Search</button>
        </div>
    )
}