window.onload = function () {


    /* =========================
       PASSWORD SYSTEM
    ========================= */

    const passwordScreen =
        document.getElementById("passwordScreen");

    const passwordInput =
        document.getElementById("passwordInput");

    const passwordBtn =
        document.getElementById("passwordBtn");

    const passwordError =
        document.getElementById("passwordError");

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
       PASSWORD CHECK
    ========================= */

    passwordBtn.addEventListener(
        "click",
        function () {

            if (passwordInput.value === "5121314") {

                passwordScreen.style.display = "none";

                loader.style.display = "block";

            } else {

                passwordError.textContent =
                    "❌ Wrong Password ❤️";

                passwordInput.value = "";

            }

        }
    );


    /* ENTER KEY ALSO WORKS */

    passwordInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                passwordBtn.click();

            }

        }
    );


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
                 * Normal page scrolling
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
