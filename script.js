window.onload = function () {

    const loader = document.getElementById("loader");
    const main = document.getElementById("main");
    const startBtn = document.getElementById("startBtn");
    const music = document.getElementById("music");

    const slides = document.querySelectorAll(".slide");
    const slideNumbers = document.querySelectorAll(".slide-number");


    /* MAIN HIDDEN INITIALLY */

    main.style.display = "none";


    /* OPEN SURPRISE */

    startBtn.addEventListener("click", function () {

        loader.style.display = "none";

        main.style.display = "block";


        /* MUSIC */

        if (music) {

            music.play().catch(function () {

                console.log("Music could not autoplay.");

            });

        }

    });


    /* SLIDER */

    slideNumbers.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedSlide =
                Number(button.getAttribute("data-slide"));


            /* Hide all slides */

            slides.forEach(function (slide) {

                slide.classList.remove("active");

                /* Stop video when changing slide */

                if (slide.tagName === "VIDEO") {

                    slide.pause();

                }

            });


            /* Remove active number */

            slideNumbers.forEach(function (number) {

                number.classList.remove("active");

            });


            /* Show selected slide */

            if (slides[selectedSlide]) {

                slides[selectedSlide].classList.add("active");

            }


            /* Active number */

            button.classList.add("active");

        });

    });

};
