// Function to create the vertical progress bar showing video playback progress
export function headerVideoProgress(params) {
  let headerVideo = document.querySelector("[data-element='home-header'] video");
  let progressBar = document.querySelector("[data-element='video-progress']");

  if (!headerVideo || !progressBar) return;

  function updateProgressBar() {
    var progress = (headerVideo.currentTime / headerVideo.duration) * 100;
    progressBar.style.height = progress + "%";
    requestAnimationFrame(updateProgressBar);
  }

  headerVideo.addEventListener("play", function () {
    requestAnimationFrame(updateProgressBar);
  });
}
