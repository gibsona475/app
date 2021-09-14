const fetch = require('node-fetch')

exports.handler = async function () {
    const POKE_API = 'https://api.fitbit.com/1/user/[user-id]/activities/date/[date].json'

    const response = await fetch (POKE_API)
    const data = await response.json()

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}