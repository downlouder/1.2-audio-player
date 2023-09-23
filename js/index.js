const playPauseBtn = document.querySelector(".play-pause");
const musicImage = document.querySelector(".image");
const audio = document.querySelector("audio");
const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".previous");
const backgroundImg = document.querySelector(".background");
const songArtist = document.querySelector(".song-artist");
const songLabel = document.querySelector(".song-label");
const musicDuration = document.querySelector(".duration");
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

function startAudio(bool) {
  if (bool) {
    playPauseBtn.dataset.play = true;
    playPauseBtn.src = "./assets/svg/pause.png";
    musicImage.style.transform = "scale(1.2)";
    audio.currentTime = 0;  
    audio.play();
  } else {
    playPauseBtn.dataset.play = false;
    playPauseBtn.src = "./assets/svg/play.png";
    musicImage.style.transform = "scale(1)";
    audio.pause();
  }
}

playPauseBtn.addEventListener("click", () => {
  if (playPauseBtn.dataset.play === "false") {
    startAudio(true);
  } else {
    startAudio(false);
  }
});

function changeSong(count) {
  const index = Math.abs(count) % 2;
  const obj = listOfMusic[index];
  console.log(obj);
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
