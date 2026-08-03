window.onload = function () {

  const loader = document.getElementById("loader");
  const main = document.getElementById("main");
  const startBtn = document.getElementById("startBtn");
  const music = document.getElementById("music");

  main.style.display = "none";

  startBtn.addEventListener("click", function () {
    loader.style.display = "none";
    main.style.display = "block";

    if (music) {
      music.play().catch(function(){});
    }
  });

};
