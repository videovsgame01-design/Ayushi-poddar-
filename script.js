window.onload = function () {

  document.getElementById("loader").style.display = "none";

  document.getElementById("main").style.display = "block";

  const music = document.getElementById("music");

  if (music) {
    music.play().catch(() => {});
  }

};
