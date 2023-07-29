import axios from "axios"

const baseUrl = '/api'


const getAll = async () => {
    const response = await axios.get(`${baseUrl}/games`)
    return response.data
}


export default { getAll }