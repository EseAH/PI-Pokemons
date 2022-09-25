const { Router } = require("express");
const { getTypes } = require("../controllers/typesC");
const router = Router();
const { Type } = require("../db")

//------------------GET TYPES----------------

router.get('/', async (req, res, next) => {
    const { name } = req.query
    try {
        let totalTypes = await getTypes()
        //console.log(totalTypes)
    if (name) {
      let typeName = await totalTypes.filter((d) => d.name.toLowerCase().includes(name.toLocaleLowerCase()))
      typeName.length ? res.status(200).send(typeName) : res.status(404).send('Type not found')
    } else {
      res.status(200).send(totalTypes)
    }
    } catch (error) {
        next(error)
    }
})

module.exports = router