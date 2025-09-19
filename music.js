// Runs every time a new page is loaded via instant loading
document$.subscribe(() => {
  // Grab the audio element inside your persistent player
  const audio = document.querySelector("#music-player audio");

  if (audio) {
    console.log("Music player is still here. Current time:", audio.currentTime);
    // You could sync or update state here if needed
  }
});