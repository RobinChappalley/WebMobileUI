
const audioTag = document.querySelector("audio");
const playSong = async (song, songs) => {
  audioTag.src = song.audio_url;
  audioTag.play().then(() => {
    handleProgressBar(audioTag.duration);
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
  totalDuration.textContent = formatTimestamp(songLength);
  progressBar.max = songLength;
  audioTag.addEventListener("timeupdate", () => {
    currentDuration.innerHTML = formatTimestamp(audioTag.currentTime);

    progressBar.value = audioTag.currentTime;
    console.log(progressBar.value);
    // progressBar.value = audioTag.currentTime/songLength;
  });
  progressBar.addEventListener("change", () => {
    audioTag.currentTime = progressBar.value;
  });
};
