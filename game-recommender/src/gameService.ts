import axios from "axios"
import { PlatformType, TagType } from "./types"

const baseUrl = '/api'


const getAll = async () => {
    const response = await axios.get(`${baseUrl}/games`)
    return response.data
}

const getGenres = async (tags: TagType[], plaform: PlatformType) => {
    const response = await axios.get(`${baseUrl}/filter?tag=${tags.join(".")}&platform=${plaform?.toLowerCase()}`)
    return response.data
}


export default { getAll, getGenres }