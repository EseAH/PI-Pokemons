import axios from "axios"
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS"
export const GET_POKEMON_NAME = "GET_POKEMON_NAME"
export const GET_DETAIL = "GET_DETAIL"
export const GET_ALL_TYPES = "GET_ALL_TYPES"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export const ORDER_NAME = "ORDER_NAME"
export const FILTER_ORIGIN = "FILTER_ORIGIN"
export const FILTER_TYPE = "FILTER_TYPE"
export const CREATE_POKEMON = "CREATE_POKEMON"
export const SORT_POKEMONS = "SORT_POKEMONS"

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
            //console.log(json)
            return dispatch({
                type: GET_ALL_TYPES,
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function setCurrentPage(payload) {
    return {
        type: SET_CURRENT_PAGE,
        payload
    }
}

export const orderName = (payload) => {
    return {
        type: ORDER_NAME,
        payload
    };
};

export const filterOrigin = (payload) => {
    return {
        type: FILTER_ORIGIN,
        payload
    };
};

export function filterType(payload) {
    return {
        type: FILTER_TYPE,
        payload
    }
}

export function postPokemon(payload){
    return async function (dispatch){
        const response = await axios.post("http://localhost:3001/pokemons", payload)
        return response
    }
}

export function sortPokemons(payload){
    return {
        type: SORT_POKEMONS,
        payload
    }    
}