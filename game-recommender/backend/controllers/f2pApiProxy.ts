import axios from "axios"
import { Router } from "express"

const f2pApiProxy = Router()


f2pApiProxy.get('/games', async (_req, res) => {
    try {
    const response = await axios
    .get('https://free-to-play-games-database.p.rapidapi.com/api/games', {
        headers: {
            'X-RapidAPI-Key': process.env.F2P_API_KEY,
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    })
    res.json(response.data)  
    }catch(e) {
    console.log(e);    
    }
})



export default f2pApiProxy