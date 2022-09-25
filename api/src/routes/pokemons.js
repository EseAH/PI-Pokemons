const { Router } = require("express");
const router = Router();
const { Pokemon, Type } = require("../db")
const { getAllPokemons, getPokeById } = require("../controllers/pokemonsC")

//------------------GET POKEMONS----------------

router.get('/', async (req, res, next) => {
    const { name } = req.query
    try {
        let totalPokemons = await getAllPokemons()
    if (name) {
      let pokemonName = await totalPokemons.filter((d) => d.name.toLowerCase().includes(name.toLocaleLowerCase()))
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

router.post("/", async (req, res, next) => {
  let { name, hp, attack, defense, speed, height, weight, image, types } = req.body;

  if (!name ) {
    res.status(400).send('Error. Missings fields')
  }
  if (typeof name !== 'string' || typeof height !== 'number' || typeof weight !== 'number') {
    res.status(400).send('Error. Incorrect data types')
  }
  //name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  try {
    // if (name && types ) {
      const newPokemon = await Pokemon.create({
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        image,
      });
      //if (types) {
        let pokemonTypes = await Type.findAll({
          where: { name: types },
        });
        pokemonTypes.forEach(types => {
          newPokemon.addType(types); //Agrego types recibidos por body
        });
      
      res.send( "Pokemon created successfully");
      console.log(newPokemon)
    //  } else {
    //    return res.status(400).send({ message: "Missing fields" });
    //  }
  } catch (error) {
      next(error)
  }
});

module.exports = router