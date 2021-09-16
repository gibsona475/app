const fetch = require('node-fetch')

exports.handler = async function () {
    const POKE_API = 'https://type.fit/api/quotes'

    const response = await fetch (POKE_API)
    const data = await response.json()

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}