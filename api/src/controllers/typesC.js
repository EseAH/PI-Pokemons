const axios = require("axios")
const { Type } = require("../db")

const getTypes = async () => {
    const totalTypes = await Type.findAll()
    try {
        if (!totalTypes.length) {
            const apiUrl = await axios.get("https://pokeapi.co/api/v2/type")
            const apiTypes = apiUrl.data.results?.map((e) => {
                return {
                    name: e.name
                }
            })
            //const formatTypes = apiTypes.map(e => e.name)
            //console.log(apiTypes)
            await Type.bulkCreate(apiTypes)
        } else {
            return totalTypes
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getTypes }