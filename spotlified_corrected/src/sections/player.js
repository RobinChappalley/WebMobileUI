import formatTimestamp from "../lib/formatTimestamp.js";

const audioTag = document.querySelector("audio");
const playerControl = document.querySelector("#player-control-play");

const playSong = async (song, songs) => {
  audioTag.src = song.audio_url;
  audioTag.play().then(() => {
    handleProgressBar(audioTag.duration);
  });
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
}); //

export default playSong;
