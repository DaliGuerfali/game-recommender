import axios, { AxiosError } from "axios"
import { Router } from "express"

const f2pApiProxy = Router()


f2pApiProxy.get('/filter', async (req, res) => {
    console.log(req.query);
    if(req.query.tag === '' || req.query.tag === '') {
        res.status(400).json({ Error: "Bad Request" })
        return
    }
    try {
        const response = await axios
            .get('https://free-to-play-games-database.p.rapidapi.com/api/filter', {
                headers: {
                    'X-RapidAPI-Key': process.env.F2P_API_KEY,
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                },
                params: { ...req.query, 'sort-by': 'release-date' },
            })
        if (response.data.status === 0) {
            res.json([])
        } else {
            res.json(response.data)
        }
    } catch (e) {
        if(e instanceof AxiosError) {
            console.log(e.message);
            res.status(500).end()
        }
    }
})



export default f2pApiProxy