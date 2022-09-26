const { Router } = require("express");
const router = Router();
const { Pokemon, Type } = require("../db")
const { getAllPokemons, getPokeById, postCreate } = require("../controllers/pokemonsC")

//------------------GET POKEMONS----------------

router.get('/', async (req, res, next) => {
    const { name } = req.query
    try {
        let totalPokemons = await getAllPokemons()
    if (name) {
      let pokemonName = await totalPokemons.filter((d) => d.name.toLowerCase() === name.toLocaleLowerCase()) //hacer .includes() para coincidencia no exacta
      pokemonName.length ? res.status(200).send(pokemonName) : res.status(404).send('Pokemon not found')
    } else {
      res.status(200).send(totalPokemons)
    }
    } catch (error) {
        next(error)
    }
})

//------------------GET POKEMON BY ID----------------

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const pokeId = await getPokeById(id);
    if (pokeId) {
      res.status(200).send(pokeId);
    } else {
      res.status(404).send("Pokemon not found");
    }
  } catch (error) {
    next(error);
  }
});

//------------------POST POKEMON----------------(corregir)

router.post("/", postCreate);

//------------------DELETE POKEMON----------------(proximamente)

module.exports = router