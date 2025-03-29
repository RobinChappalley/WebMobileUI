import { getItem, setItem, getItems, removeItem } from "./webStorage.js";

export const toggleFavorite = (song) => {
  if (isFavorite(song)) {
    removeFavorite(song);
  } else {
    setFavorite(song);
  }
};

const setFavorite = (song) => {
  setItem(song.id, song);
};

const removeFavorite = (song) => {
  console.log(song);
  removeItem(song.id);
};

export const isFavorite = (song) => {
  if (getItem(song.id)) return "true";
  else return "false";
};
