document.addEventListener("DOMContentLoaded", function () {

    const passwordScreen = document.getElementById("passwordScreen");
    const passwordInput = document.getElementById("passwordInput");
    const passwordBtn = document.getElementById("passwordBtn");
    const passwordError = document.getElementById("passwordError");

    const loader = document.getElementById("loader");
    const startBtn = document.getElementById("startBtn");
    const main = document.getElementById("main");
    const music = document.getElementById("music");


    /* =========================
       START
    ========================= */

    if (passwordScreen) {
        passwordScreen.style.display = "flex";
    }

    if (loader) {
        loader.style.display = "none";
    }

    if (main) {
        main.style.display = "none";
    }


    /* =========================
       PASSWORD
    ========================= */

    function unlockWebsite() {

        if (!passwordInput) return;

        if (passwordInput.value === "5121314") {

            if (passwordError) {
                passwordError.textContent = "";
            }

            if (passwordScreen) {
                passwordScreen.style.display = "none";
            }

            if (loader) {
                loader.style.display = "flex";
            }

        } else {

            if (passwordError) {
                passwordError.textContent =
                    "❌ Wrong Password ❤️";
            }

            passwordInput.value = "";
            passwordInput.focus();
        }
    }


    if (passwordBtn) {
        passwordBtn.addEventListener(
            "click",
            unlockWebsite
        );
    }


    if (passwordInput) {

        passwordInput.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {
                    unlockWebsite();
                }

            }
        );

    }


    /* =========================
       OPEN SURPRISE
    ========================= */

    if (startBtn) {

        startBtn.addEventListener(
            "click",
            function () {

                if (loader) {
                    loader.style.display = "none";
                }

                if (main) {
                    main.style.display = "block";
                }

                if (music) {
                    music.play().catch(
                        function () {}
                    );
                }

            }
        );

    }


    /* =========================
       SWIPE PHOTOS
    ========================= */

    const boxes =
        document.querySelectorAll(".swipe-box");


    boxes.forEach(function (box) {

        let startX = 0;
        let startY = 0;


        box.addEventListener(
            "touchstart",
            function (event) {

                startX =
                    event.touches[0].clientX;

                startY =
                    event.touches[0].clientY;

            },
            { passive: true }
        );


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


                if (
                    Math.abs(differenceX) > 50 &&
                    Math.abs(differenceX) >
                    Math.abs(differenceY)
                ) {

                    box.classList.add(
                        "revealed"
                    );

                }

            },
            { passive: true }
        );

    });

});
