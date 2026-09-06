window.onload = function () {


    /* =========================
       EXISTING ELEMENTS
    ========================= */

    const loader =
        document.getElementById("loader");

    const main =
        document.getElementById("main");

    const startBtn =
        document.getElementById("startBtn");

    const music =
        document.getElementById("music");



    /* MAIN HIDDEN INITIALLY */

    main.style.display = "none";



    /* =========================
       OPEN SURPRISE
    ========================= */

    startBtn.addEventListener(
        "click",
        function () {

            loader.style.display = "none";

            main.style.display = "block";


            /* MUSIC */

            if (music) {

                music.play()
                .catch(function () {});

            }

        }
    );



    /* =========================
       SWIPE BOX SYSTEM
    ========================= */

    const boxes =
        document.querySelectorAll(".swipe-box");



    boxes.forEach(function (box) {


        let startX = 0;

        let startY = 0;



        /* FINGER TOUCH START */

        box.addEventListener(
            "touchstart",
            function (event) {

                startX =
                    event.touches[0].clientX;

                startY =
                    event.touches[0].clientY;

            },
            { passive:true }
        );



        /* FINGER RELEASE */

        box.addEventListener(
            "touchend",
            function (event) {


                const endX =
                    event.changedTouches[0].clientX;

                const endY =
                    event.changedTouches[0].clientY;



                const differenceX =
                    endX - startX;

                const differenceY =
                    endY - startY;



                /*
                 * Sirf horizontal swipe
                 * ko detect karna hai.
                 *
                 * Isliye normal
                 * up/down page scrolling
                 * disturb nahi hogi.
                 */

                if (

                    Math.abs(differenceX) > 50 &&

                    Math.abs(differenceX) >
                    Math.abs(differenceY)

                ) {


                    /* PHOTO / VIDEO SHOW */

                    box.classList.add(
                        "revealed"
                    );


                }

            },
            { passive:true }
        );

    });

};
