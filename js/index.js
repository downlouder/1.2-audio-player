const playPauseBtn = document.querySelector(".play-pause");
const musicImage = document.querySelector(".image");
const audio = document.querySelector("audio");
const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".previous");
const backgroundImg = document.querySelector(".background");
const songArtist = document.querySelector(".song-artist");
const songLabel = document.querySelector(".song-label");
const musicDuration = document.querySelector(".duration");
const musicCurrentTime = document.querySelector(".current-time");
const progressBar = document.querySelector(".progress-bar");
const listOfMusic = [
  {
    link: "./assets/audio/beyonce.mp3",
    label: "Don't Hurt Yourself",
    artist: "Beyonce",
    art: "./assets/img/lemonade.png",
    duration: "3:53",
  },
  {
    link: "./assets/audio/dontstartnow.mp3",
    label: "Don't Start Now",
    artist: "Dua Lipa",
    art: "./assets/img/dontstartnow.png",
    duration: "3:23",
  },
];
let count = 0;
progressBar.max = audio.duration;

function startAudio(bool) {
  progressBar.max = audio.duration;
  if (bool) {
    playPauseBtn.dataset.play = true;
    playPauseBtn.src = "./assets/svg/pause.png";
    musicImage.style.transform = "scale(1.2)";
    audio.play();
  } else {
    playPauseBtn.dataset.play = false;
    playPauseBtn.src = "./assets/svg/play.png";
    musicImage.style.transform = "scale(1)";
    audio.pause();
  }
}

playPauseBtn.addEventListener("click", () => {
  progressBar.max = audio.duration;
  if (playPauseBtn.dataset.play === "false") {
    startAudio(true);
  } else {
    startAudio(false);
  }
});

function changeSong(count) {
  const index = Math.abs(count) % 2;
  const obj = listOfMusic[index];
  progressBar.max = audio.duration;
  backgroundImg.src = obj.art;
  musicImage.src = obj.art;
  songArtist.textContent = obj.artist;
  songLabel.textContent = obj.label;
  audio.src = obj.link;
  musicDuration.textContent = obj.duration;
  startAudio(true);
}

nextBtn.addEventListener("click", () => {
  changeSong(++count);
});
previousBtn.addEventListener("click", () => {
  changeSong(--count);
});

audio.addEventListener("timeupdate", () => {
  const currentTime = `${Math.floor(audio.currentTime / 60)}:${
    Math.floor(audio.currentTime % 60) >= 10
      ? Math.floor(audio.currentTime % 60)
      : "0" + Math.floor(audio.currentTime % 60)
  }`;
  const duration = isNaN(audio.duration)
  ? "0:00"
    : `${Math.floor(audio.duration / 60)}:${
        Math.floor(audio.duration % 60) >= 10
          ? Math.floor(audio.duration % 60)
          : "0" + Math.floor(audio.duration % 60)
      }`;
  musicDuration.textContent = duration;
  musicCurrentTime.textContent = currentTime;
  progressBar.max = audio.duration;
  progressBar.value = audio.currentTime;
});

progressBar.addEventListener('change', () => {
  audio.currentTime = progressBar.value;
})