import { GET_ALL_POKEMONS, GET_POKEMON_NAME, GET_DETAIL, GET_ALL_TYPES, CREATE_POKEMON } from "./actions"

const initialState = {
    pokemons: [],
    allPokemons: [],
    detail: [],
    types: [],
    //filtros: [],
    //errors: {}
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {

        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload,
            }
        case GET_POKEMON_NAME:
            return {
                ...state,
                pokemons: action.payload
            }
        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload
            }
        case GET_ALL_TYPES:
            return {
                ...state,
                types: action.payload
            }
        case CREATE_POKEMON:
            return {
                ...state
            }
    //   case ERROR:
    //       return {
    //           ...state,
    //           errors: action.payload
    //       }
        default:
            return state;
    }
  }