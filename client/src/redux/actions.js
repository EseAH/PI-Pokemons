import axios from "axios"
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS"
export const GET_POKEMON_NAME = "GET_POKEMON_NAME"
export const GET_DETAIL = "GET_DETAIL"
export const GET_ALL_TYPES = "GET_ALL_TYPES"
export const CREATE_POKEMON = "CREATE_POKEMON"

export function getPokemons(){
    return async function(dispatch){
        try {
            let json = await axios.get("http://localhost:3001/pokemons")
            //console.log(json.data)
            return dispatch({
                type: GET_ALL_POKEMONS,
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getPokemonName(name){
    return async function(dispatch) {
        try {
            let json = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
            return dispatch ({
                type: GET_POKEMON_NAME,
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getPokemonDetail(id){
    return async function(dispatch) {
        try {
            let json = await axios.get(`http://localhost:3001/pokemons/${id}`)
            //console.log(json)
            return dispatch ({
                type: GET_DETAIL,
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getTypes(){
    return async function(dispatch){
        try {
            let json = await axios("http://localhost:3001/types")
            console.log(json)
            return dispatch({
                type: GET_ALL_TYPES,
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function postPokemon(payload){
    return async function (dispatch){
        const response = await axios.post("http://localhost:3001/pokemons", payload)
        return response
    }
}