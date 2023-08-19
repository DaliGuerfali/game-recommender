import axios from "axios"
import { PlatformType, TagType } from "./types"

const baseUrl = '/api'

const getGenres = async (tags: TagType[], plaform: PlatformType) => {
    const response = await axios.get(`${baseUrl}/filter?tag=${tags.join(".")}&platform=${plaform?.toLowerCase()}`)
    return response.data
}


export default { getGenres }