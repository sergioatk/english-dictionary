import axios from "axios"
import { DICTIONARY_URL } from "./constants"

export const getWordInfo = async (word) => {
    return await axios.get(`${DICTIONARY_URL}/${word}`)
}