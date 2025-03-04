import formatTimestamp from "../lib/formatTimestamp.js";

const audioTag = document.querySelector("audio");
const playerControl = document.querySelector("#player-control-play");
const icon = playerControl.querySelector(".material-icons");
const logo = document.querySelector("#logo");

const nextButton = document.querySelector("#player-control-next");
const prevButton = document.querySelector("#player-control-previous");

let currentSong = null;
let arraySong = null;

const playSong = async (song, songs) => {
  if (songs) arraySong = songs;
  currentSong = song;
  audioTag.src = song.audio_url;
  audioTag.play().then(() => {
    handleProgressBar(audioTag.duration);
  });
  console.table(arraySong);

  displaySongInfos(song);
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
  totalDuration.textContent = formatTimestamp(songLength);
  progressBar.max = songLength;
  audioTag.addEventListener("timeupdate", () => {
    currentDuration.innerHTML = formatTimestamp(audioTag.currentTime);
    progressBar.value = audioTag.currentTime;
  });
  progressBar.addEventListener("change", () => {
    audioTag.currentTime = progressBar.value;
  });
};

const toggleLecture = () => {
  if (audioTag.paused) audioTag.play();
  else audioTag.pause();
};

playerControl.addEventListener("click", () => {
  toggleLecture();
});
audioTag.addEventListener("play", () => {
  icon.innerText = "pause";
  logo.classList.add("animated");
});
audioTag.addEventListener("pause", () => {
  icon.innerText = "play_arrow";
  logo.classList.remove("animated");
});

audioTag.addEventListener("ended", () => {
  playNext();
});
nextButton.addEventListener("click", () => playNext());
const playNext = () => {
  let songID = arraySong.indexOf(currentSong);
  if (songID !== arraySong.length - 1) {
    songID++;
  } else {
    songID = 0;
  }
  playSong(arraySong[songID]);
};

prevButton.addEventListener("click", () => playPrev());
const playPrev = () => {
  let songID = arraySong.indexOf(currentSong);
  if (songID === 0) {
    songID = arraySong.length - 1;
  } else {
    songID--;
  }
  console.log(songID);
  playSong(arraySong[songID]);
};

export default playSong;
