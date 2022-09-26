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
                name: pokemon.data.name.charAt(0).toUpperCase() + pokemon.data.name.substring(1),
                hp: pokemon.data.stats[0].base_stat,
                attack: pokemon.data.stats[1].base_stat,
                defense: pokemon.data.stats[2].base_stat,
                speed: pokemon.data.stats[5].base_stat,
                height: pokemon.data.height,
                weight: pokemon.data.weight,
                types: pokemon.data.types.map(e=> {
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
        // include: [Type]
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
          //console.log(pokeId)
          return pokeId;
      } else {
          console.log('Pokemon not found')
      }
    } catch (error) {
      console.log(error);
    }
  };

//------------------POST POKEMON----------------(corregir)

const postCreate = async (req, res, next) => {
    const { name, hp, attack, defense, speed, height, weight, image, types } =
      req.body;
    try {
      // if (typeof name !== 'string' || typeof height !== 'number' || typeof weight !== 'number') {
      //   res.status(400).send('Error. Incorrect data types')
      // }
      if (!name) return res.status(404).send("Pokemon's name is obligatory");
      if (name) {
        const allPokes = await getAllPokemons();
        const nameMatch = allPokes.filter(e => e.name.toLowerCase() === name.toLowerCase());
        if (!nameMatch.length) {
          const newPokemon = await Pokemon.create({
            name: name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(),
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
            image,
          });
          const typePoke = await Type.findAll({
            where: {
              name: types,
            },
          });
          newPokemon.addType(typePoke);
          return res.status(201).send(newPokemon);
        }
        return res.status(404).send("Pokemon's name already exist!");
      }
    } catch (error) {
      next(error);
    }
  };

  module.exports = { getAllPokemons, getPokeById, postCreate }