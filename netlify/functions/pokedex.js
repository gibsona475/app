const fetch = require('node-fetch')
const POKE_API = 'https://type.fit/api/quotes'

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }  
exports.handler = async function () {
    try{
        const data = await fetch(POKE_API).then(response => response.json());
        const randomInt = getRandomInt(data.length -1);
        const randomQuote = data[randomInt];
        console.log(randomQuote)
        return {
            statusCode: 200,
            body: JSON.stringify(randomQuote)
        }
    }catch(err){
        console.log('-------------', err);
    }
    
}