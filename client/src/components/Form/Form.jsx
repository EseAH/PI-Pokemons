import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getPokemons, getTypes } from "../../redux/actions";

export const Form = () => {
    const dispatch = useDispatch()
    const types = useSelector((state) => state.types)
    //console.log(types)
    const [input, setInput] = useState({
        name: "",
        image: "",
        types: [],
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: ""
    })

    //const [errorsForm, setErrorsForm] = useState({})


    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
        //setErrorsForm(validator(input))
        console.log(input)
    }

    function handleTypes(e) {
        setInput({
            ...input,
            types: [...new Set([...input.types, e.target.value])]
        })
    }
    function handleSubmit(e) {
        e.preventDefault()
        console.log(input)
    }

    // function validator(datos) {
    //     let errors = {}
    //     if(validName(datos.name)) errors.name = "Error name"

    //     return errors
    // }
    // function validName(str) {
    //     if(typeof str !== 'string') return true
    //     if(str.length < 2) return true
    // }

    //useEffect()
// SEGUIR FORMULARIO ---> VID her
    return (
        <>
        <div>
            <h1>Create your pokemon!</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type='text' value={input.name} name='name' onChange={handleChange}/>
                    <label>Image:</label>
                    <input type='text' value={input.image} name='image' onChange={handleChange}/>
                    <label>Types:</label>
                    <select>
                        {types?.map((c) => (
                            <option value={c.name}>{c.name}</option>
                        ))}
                    </select>
                    <label>HP:</label>
                    <input type='number' value={input.hp} name='hp' onChange={handleChange}/>
                    <label>Attack:</label>
                    <input type='number' value={input.attack} name='attack' onChange={handleChange}/>
                    <label>Defense:</label>
                    <input type='number' value={input.defense} name='defense' onChange={handleChange}/>
                    <label>Speed:</label>
                    <input type='number' value={input.speed} name='speed' onChange={handleChange}/>
                    <label>Height:</label>
                    <input type='number' value={input.height} name='height' onChange={handleChange}/>
                    <label>Weight:</label>
                    <input type='number' value={input.weight} name='weight' onChange={handleChange}/>
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
        </>
    )
}