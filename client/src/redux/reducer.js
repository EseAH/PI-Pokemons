import {
  GET_ALL_POKEMONS,
  GET_POKEMON_NAME,
  GET_DETAIL,
  GET_ALL_TYPES,
  SET_CURRENT_PAGE,
  ORDER_NAME,
  FILTER_ORIGIN,
  FILTER_TYPE,
  CREATE_POKEMON,
} from "./actions";

const initialState = {
  pokemons: [],
  allPokemons: [],
  detail: [],
  types: [],
  currentP: 0,
  //filtros: [],
  //errors: {}
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };
    case GET_POKEMON_NAME:
      return {
        ...state,
        pokemons: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case GET_ALL_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentP: action.payload,
      };
    case ORDER_NAME:
      let pokes = state.pokemons;
      let sortedName = action.payload === 'asc' ?
          pokes.sort((a, b) => {
            if (a.name > b.name) return 1  
            if (a.name < b.name) return -1  
            return 0
          }) :
          pokes.sort((b, a) => {
            if (a.name > b.name) return 1  
            if (a.name < b.name) return -1  
            return 0
          })
      return {
          ...state,
          pokemons: sortedName
      };

    case FILTER_TYPE:
      const allPokes = state.allPokemons;
      let typeFilter =
        action.payload === "all"
          ? allPokes
          : allPokes.filter((e) => e.types === action.payload);
          console.log(typeFilter)
      if (typeFilter.length = 0) {
        typeFilter = allPokes;
        alert("Do not exist pokemons of this type");
      }
      return {
        ...state,
        allPokemons: typeFilter,
      };
    case CREATE_POKEMON:
      return {
        ...state,
      };
    //   case ERROR:
    //       return {
    //           ...state,
    //           errors: action.payload
    //       }
    default:
      return state;
  }
}
