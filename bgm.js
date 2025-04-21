const music = document.getElementById("bg-music");
const toggleButton = document.getElementById("music-toggle");

window.addEventListener("load", () => {
  const savedTime = localStorage.getItem("musicTime");
  if (savedTime) {
    music.currentTime = parseFloat(savedTime);
  }

  const savedState = localStorage.getItem("musicPaused");
  if (savedState === "true") {
    music.pause();
    toggleButton.textContent = "Play BGM";
  } else {
    music.play().catch(() => {});
    toggleButton.textContent = "Pause BGM";
  }
});

window.addEventListener("beforeunload", () => {
  localStorage.setItem("musicTime", music.currentTime);
  localStorage.setItem("musicPaused", music.paused);
});

toggleButton.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggleButton.textContent = "Pause BGM";
  } else {
    music.pause();
    toggleButton.textContent = "Play BGM";
  }
});