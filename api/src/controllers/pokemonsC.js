const axios = require("axios")
const { Pokemon, Type } = require("../db")

//----Traer pokemons de la API

const getPokemonsApi = async () => {
    try {
        const apiUrl = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=40")

        const apiPoks = apiUrl.data.results?.map(async (e) => {
            const pokemon = await axios.get(e.url)
            return {
                id: pokemon.data.id,
                image: pokemon.data.sprites.other.home.front_default,
                name: pokemon.data.name,
                hp: pokemon.data.stats[0].base_stat,
                attack: pokemon.data.stats[1].base_stat,
                defense: pokemon.data.stats[2].base_stat,
                speed: pokemon.data.stats[5].base_stat,
                height: pokemon.data.stats.height,
                weight: pokemon.data.stats.weight,
                types: pokemon.data.types.filter(e=> {
                    return e.type.name
                }),
            }
        })
        const infoPokes = await Promise.all(apiPoks)
        return infoPokes
    } catch (error) {
        console.log(error)
    }
}

//-----Traer pokemones de la BD

const getPokemonsDb = async () => {
    return await Pokemon.findAll({
        // include: [Temperament]
        include: {
            model: Type,
            attributes: ["name"],
            through: {
                attributes: [],
            },
        }
    });
};

//---- Traigo TODOS los pokemones --- API + DB

const getAllPokemons = async () => {
    const apiInfo = await getPokemonsApi();
    const dbInfo = await getPokemonsDb();
    const allPokemons = [...apiInfo, ...dbInfo];
    //console.log(apiInfo);
    return allPokemons;
  };

//-----Get Pokes by ID

const getPokeById = async (id) => {
    try {
      const pokemons = await getAllPokemons();
      if (id) {
          let pokeId = pokemons.filter(e => e.id.toString() === id.toString())
          //console.log(dogId)
          return pokeId;
      } else {
          console.log('Pokemon not found')
      }
    } catch (error) {
      console.log(error);
    }
  };


  module.exports = { getAllPokemons, getPokeById }