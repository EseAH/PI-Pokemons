import React, {useEffect} from "react"
import { useDispatch, useSelector} from "react-redux"
import { getPokemons } from "../redux/actions"
import { Link } from "react-router-dom"
import Card from "./Card"

export default function AllCards() {
    let estadoPokes = useSelector((state) => state.pokemons)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPokemons())
    }, [dispatch])

    return (
        <>
            <div>
                {estadoPokes.length > 0 ? estadoPokes.map( e =>
                <Link key={e.id} to={`/pokemons/${e.id}`}>
                    <Card name={e.name} image={e.image} types={e.types} />
                </Link>
                ): <h3>Loading...</h3>}
            </div>
        </>
    )
}