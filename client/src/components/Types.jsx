import React, {useEffect, useState} from "react"
import { useDispatch, useSelector} from "react-redux"
import { Link } from "react-router-dom"
import { getTypes } from "../redux/actions"
import Nav from "./Nav/Nav"

export default function Types() {
    const types = useSelector((state) => state.types)
    const dispatch = useDispatch()

    

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])

    function prevHandler(params) {
        
    }
    function nextHandler(params) {
        
    }

    return (
        <>
        <Nav/>
        <h1>TYPES</h1>
        <div>
            <div>
                {types?.map((e) => {
                    <ul>
                        <li key={e.id}>{e.name}</li>
                    </ul>
                })
            }
            </div>
            <button onClick={prevHandler}>Prev</button>
            <button onClick={nextHandler}>Next</button>
        </div>
        <div>
            <Link to="/home"><button className="buttonBack">Back</button></Link>
        </div>
        </>
    )
}
