import { getItem, setItem, getItems, removeItem } from "./webStorage.js";

export const toggleFavorite = (song) => {
    if (isFavorite(song)) {
        removeFavorite(song)
    } else {
        setFavorite(song)
    }
}


const setFavorite = (song) => {
    setItem(song.id, song)
}

const removeFavorite = (song) => {
    removeItem(song.id)
}

const isFavorite = (song) => {
    return false
}
