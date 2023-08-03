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
    res.status(500).end()    
    }
})


f2pApiProxy.get('/filter', async (req, res) => {
    console.log(req.query);
    try {
        const response = await axios
        .get('https://free-to-play-games-database.p.rapidapi.com/api/filter', {
            headers: {
                'X-RapidAPI-Key': process.env.F2P_API_KEY,
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            },
            params: req.query,
        })
        if(response.data.status === 0) {
            res.json([])
        } else {
            res.json(response.data)
        }
    } catch(e) {
        console.log(e);
        res.status(500).end()
    }
})



export default f2pApiProxy