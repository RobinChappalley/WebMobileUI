import { loadSongs } from "../api.js";
import playSong from "./player.js";

const songList = document.querySelector(".list");
const titreList = document.querySelector("#list-section h4");

const displayArtistSongs = async (id) => {
  const songs = await loadSongs(id);
  titreList.innerHTML = `Artistes > ${songs[0].artist.name}`;
  songList.innerHTML = "";

  songs.forEach((song) => {
    // Créer l'élément
    const songItem = document.createElement("song-item");
    songItem.setAttribute("title", song.title);
    songItem.setAttribute("favorite", false); // ou true, pour plus tard

    songItem.addEventListener("play_click", () => {
      playSong(song, songs);
    });
    songList.appendChild(songItem);
  });
};

export { displayArtistSongs };
