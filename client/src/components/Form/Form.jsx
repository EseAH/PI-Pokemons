import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTypes, postPokemon } from "../../redux/actions";
import { validate } from "./Validate";
import styles from "./Form.module.css"

export const Form = () => {
    const dispatch = useDispatch()
    const types = useSelector((state) => state.types)
    //console.log(types)

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])

    const [errors, setErrors] = useState({})

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

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value,
            })    
        )
        console.log(input)
    }

    function handleTypes(e) {
        if (input.types.length < 2) {
            setInput({
                ...input,
                types: [...new Set([...input.types, e.target.value])]
            })
        } else {
            alert("Can't add more than 2 types")
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (input.name && input.types.length && !errors.name && !errors.image && !errors.hp && !errors.attack && !errors.defense) {
            dispatch(postPokemon(input))
            alert("Pokemon create")
            setInput({
                name:"",
                image: "",
                types: [],
                hp: "",
                attack: "",
                defense: "",
                speed: "",
                height: "",
                weight: "",
            })
        } else {
            alert("Error. Check the form and complete")
        }
        console.log(input)
    }

    function handleDelete(e) {
        setInput({
            ...input,
            types: input.types.filter((type) => type !== e)
        })
    }

    return (
        <>
        <div className={styles.container}>
            <h1>Create your pokemon!</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type='text' value={input.name} name='name' onChange={(e) => {handleChange(e)}}/>
                    <p className={styles.p}>{errors.name}</p>

                    <label>Image:</label>
                    <input type='text' value={input.image} name='image' onChange={(e) => {handleChange(e)}}/>
                    <p>{errors.image}</p>

                    <label>Types:</label>
                    <select onChange={handleTypes}>
                    <option hidden selected>select types</option>
                        {types?.map((c) => (
                            <option key={c.id} value={c.name}>{c.name}</option>
                        ))}
                    </select>
                    <div>
                        {input.types.map((e) => {
                            return (
                                <div>
                                    <ul>
                                        <li>{e}</li>
                                        <button onClick={()=>handleDelete(e)}>x</button>
                                    </ul>
                                </div>
                            )
                        })}
                        <p>{errors.types}</p>
                    </div>

                    <label>HP:</label>
                    <input type='number' value={input.hp} name='hp' onChange={handleChange}/>
                    <p>{errors.hp}</p>

                    <label>Attack:</label>
                    <input type='number' value={input.attack} name='attack' onChange={handleChange}/>
                    <p>{errors.attack}</p>

                    <label>Defense:</label>
                    <input type='number' value={input.defense} name='defense' onChange={handleChange}/>
                    <p>{errors.defense}</p>

                    <label>Speed:</label>
                    <input type='number' value={input.speed} name='speed' onChange={handleChange}/>
                    <p>{errors.speed}</p>

                    <label>Height:</label>
                    <input type='number' value={input.height} name='height' onChange={handleChange}/>
                    <p>{errors.height}</p>

                    <label>Weight:</label>
                    <input type='number' value={input.weight} name='weight' onChange={handleChange}/>
                    <p>{errors.weight}</p>
                </div>
                <button className={!input.name || Object.keys(errors).length > 0 ? styles.btn_off : styles.btn_on} type="submit">Create</button>
            </form>
        </div>
        </>
    )
}