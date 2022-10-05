import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getPokemonDetail } from "../redux/actions";
import Nav from "../components/Nav/Nav";

export default function Detail() {
    const dispatch = useDispatch()
    const {id} = useParams()
    
    useEffect(() => {
        dispatch(getPokemonDetail(id))
    }, [dispatch, id])
    const pokeDetail = useSelector((state) => state.detail)
    
    return (
        <>
            <Nav/>
            {
                pokeDetail.length > 0 ? 
                <div className="details">
                    <h1>{pokeDetail[0].name}</h1>
                    <img className="imgDetail" src={pokeDetail[0].image} alt="pokemon"/>
                    <h4>{pokeDetail[0].id}</h4>
                    <div>Types: {pokeDetail[0].types.map(i => {
                        return (
                            <h3 /*key={pokeDetail[0].id}*/>{i.toUpperCase()}</h3>
                        )
                    })}</div>
                    <h3>Stats</h3>
                    <h4>HP: {pokeDetail[0].hp}</h4>
                    <h4>Attack: {pokeDetail[0].attack}</h4>
                    <h4>Defense: {pokeDetail[0].defense}</h4>
                    <h4>Speed: {pokeDetail[0].speed}</h4>
                    <h4>Height: {pokeDetail[0].height}</h4>
                    <h4>Weight: {pokeDetail[0].weight}</h4>
                </div>
                :
                <div>
                    <h3>Loading...</h3>
                </div>
            }
        <div>
            <Link to="/home"><button className="buttonBack">Back</button></Link>
        </div>
        </>
    )
}