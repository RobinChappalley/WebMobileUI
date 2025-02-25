import { loadSongs } from "../api.js";
import formatTimestamp from "../lib/formatTimestamp.js";

// Récupérer le tag contenant la liste des chansons et le titre de la section
const songList = document.querySelector(".list");
const titreList = document.querySelector("#list-section h4");
const audioTag = document.querySelector("audio");

// S'occupe d'afficher les chansons d'un artiste, selon son ID.
// Pour cela, on va utiliser loadSongs du fichiers api.js qui lui sait nous retourner
// un tableau de chanson, selon l'id d'un artiste
const displayArtistSongs = async (id) => {
  // Récupérer la liste des chansons depuis l'api
  const songs = await loadSongs(id);

  // Titre à jour
  titreList.innerHTML = `Artistes > ${songs[0].artist.name}`;

  // Vider la liste
  songList.innerHTML = "";

  // Itérer le tableau d'artistes reçus et créer les éléments correspondants
  songs.forEach((song) => {
    // Créer l'élément
    const songItem = document.createElement("song-item");

    songItem.setAttribute("title", song.title);
    songItem.setAttribute("favorite", false); // ou true, pour plus tard

    // Insérer dans la liste
    songList.appendChild(songItem);
    songItem.addEventListener("click", () => {
      playSong(song, songs);
      displaySongInfos(song);
    });
  });
};

// Fonction pour jouer une musique

const playSong = async (song, songs) => {
  audioTag.src = song.audio_url;
  audioTag.play().then(() => {
    handleProgressBar(audioTag.duration);
    console.log(song);
  });
};

const displaySongInfos = async (song) => {
  const coverImg = document.querySelector("#player-thumbnail-image");
  coverImg.src = song.artist.image_url;
  const title = document.querySelector("#player-infos-song-title");
  title.innerHTML = song.title;
  const artist = document.querySelector("#player-infos-artist-name");
  artist.innerHTML = song.artist.name;
};

const handleProgressBar = async (songLength) => {
  const progressBar = document.querySelector("#player-progress-bar");
  const currentDuration = document.querySelector("#player-time-current");
  const totalDuration = document.querySelector("#player-time-duration");
  currentDuration.innerHTML = currentDuration;
  totalDuration.textContent = formatTimestamp(songLength);
  audioTag.addEventListener(
    "timeupdate",
    () => (currentDuration.innerHTML = formatTimestamp(audioTag.currentTime))
  );

  progressBar.value = 0;
};
export { displayArtistSongs };
