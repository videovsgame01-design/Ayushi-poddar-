window.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       GET ELEMENTS
    ========================================= */

    const passwordScreen = document.getElementById("passwordScreen");
    const passwordInput = document.getElementById("passwordInput");
    const passwordBtn = document.getElementById("passwordBtn");
    const passwordError = document.getElementById("passwordError");

    const birthdayAnimation = document.getElementById("birthdayAnimation");
    const arrow = document.getElementById("arrow");
    const targetHeart = document.getElementById("targetHeart");

    const birthdayTitle = document.getElementById("birthdayTitle");
    const tree = document.getElementById("tree");
    const continueBtn = document.getElementById("continueBtn");

    const loader = document.getElementById("loader");
    const startBtn = document.getElementById("startBtn");
    const main = document.getElementById("main");
    const music = document.getElementById("music");


    /* =========================================
       CHECK IMPORTANT ELEMENTS
    ========================================= */

    if (!passwordScreen || !passwordInput || !passwordBtn) {

        console.error(
            "Password elements missing from index.html"
        );

        return;
    }


    /* =========================================
       INITIAL SCREEN
    ========================================= */

    passwordScreen.style.display = "flex";

    if (birthdayAnimation) {
        birthdayAnimation.style.display = "none";
    }

    if (loader) {
        loader.style.display = "none";
    }

    if (main) {
        main.style.display = "none";
    }


    /* =========================================
       PASSWORD SYSTEM
    ========================================= */

    function unlockWebsite() {

        const enteredPassword =
            passwordInput.value.trim();


        /* CORRECT PASSWORD */

        if (enteredPassword === "5121314") {

            passwordError.textContent = "";

            passwordScreen.style.display = "none";


            /* Start animation */

            if (birthdayAnimation) {

                birthdayAnimation.style.display =
                    "block";

                startBirthdayAnimation();

            }

        }

        /* WRONG PASSWORD */

        else {

            passwordError.textContent =
                "❌ Wrong Password ❤️";

            passwordInput.value = "";

            passwordInput.focus();

        }

    }


    passwordBtn.addEventListener(
        "click",
        unlockWebsite
    );


    passwordInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                unlockWebsite();

            }

        }
    );


    /* =========================================
       START BIRTHDAY ANIMATION
    ========================================= */

    function startBirthdayAnimation() {

        if (birthdayTitle) {
            birthdayTitle.classList.remove("show");
        }

        if (tree) {
            tree.classList.remove("grow");
        }

        if (continueBtn) {
            continueBtn.classList.remove("show");
        }

        if (targetHeart) {
            targetHeart.classList.remove("hit-heart");
            targetHeart.style.opacity = "1";
        }

        if (arrow) {

            arrow.style.opacity = "1";

            arrow.style.transform =
                "rotate(-25deg)";

        }

    }


    /* =========================================
       ARROW DRAG
    ========================================= */

    if (arrow && targetHeart) {

        let dragging = false;


        arrow.addEventListener(
            "pointerdown",
            function (event) {

                dragging = true;

                arrow.setPointerCapture(
                    event.pointerId
                );

                arrow.style.cursor = "grabbing";

            }
        );


        arrow.addEventListener(
            "pointermove",
            function (event) {

                if (!dragging) return;

                rotateArrow(
                    event.clientX,
                    event.clientY
                );

            }
        );


        arrow.addEventListener(
            "pointerup",
            function (event) {

                if (!dragging) return;

                dragging = false;

                arrow.style.cursor = "grab";

                checkArrowHit();

            }
        );


        arrow.addEventListener(
            "pointercancel",
            function () {

                dragging = false;

                arrow.style.cursor = "grab";

            }
        );

    }


    /* =========================================
       ROTATE ARROW
    ========================================= */

    function rotateArrow(x, y) {

        const rect =
            arrow.getBoundingClientRect();


        /*
          Arrow ke starting point ko use kar rahe hain.
          Bounding-box ke right edge ko nahi.
        */

        const originX =
            rect.left + 10;

        const originY =
            rect.top +
            rect.height / 2;


        const dx =
            x - originX;

        const dy =
            y - originY;


        let angle =
            Math.atan2(dy, dx) *
            180 /
            Math.PI;


        /*
          Sirf upar ki taraf aim
        */

        if (angle > 10) {
            angle = 10;
        }

        if (angle < -75) {
            angle = -75;
        }


        arrow.style.transform =
            "rotate(" + angle + "deg)";

    }


    /* =========================================
       CHECK ARROW + HEART
    ========================================= */

    function checkArrowHit() {

        const arrowRect =
            arrow.getBoundingClientRect();

        const heartRect =
            targetHeart.getBoundingClientRect();


        /*
          Arrow ka approximate tip.
        */

        const tipX =
            arrowRect.left +
            arrowRect.width * 0.92;

        const tipY =
            arrowRect.top +
            arrowRect.height / 2;


        const heartX =
            heartRect.left +
            heartRect.width / 2;

        const heartY =
            heartRect.top +
            heartRect.height / 2;


        const distance =
            Math.sqrt(
                Math.pow(tipX - heartX, 2) +
                Math.pow(tipY - heartY, 2)
            );


        /*
          Heart ke paas hua to hit.
        */

        if (distance < 150) {

            hitHeart();

        }

    }


    /* =========================================
       HEART HIT
    ========================================= */

    function hitHeart() {

        if (
            targetHeart.classList.contains(
                "hit-heart"
            )
        ) {
            return;
        }


        targetHeart.classList.add(
            "hit-heart"
        );


        arrow.style.opacity = "0";


        const help =
            document.querySelector(".aim-help");


        if (help) {
            help.style.opacity = "0";
        }


        setTimeout(
            showBirthday,
            850
        );

    }


    /* =========================================
       SHOW HAPPY BIRTHDAY
    ========================================= */

    function showBirthday() {

        if (birthdayTitle) {

            birthdayTitle.classList.add(
                "show"
            );

        }


        /* Tree grows */

        setTimeout(
            function () {

                if (tree) {

                    tree.classList.add(
                        "grow"
                    );

                }

            },
            1200
        );


        /* Continue button */

        setTimeout(
            function () {

                if (continueBtn) {

                    continueBtn.classList.add(
                        "show"
                    );

                }

            },
            4000
        );

    }


    /* =========================================
       CONTINUE
    ========================================= */

    if (continueBtn) {

        continueBtn.addEventListener(
            "click",
            function () {

                if (birthdayAnimation) {

                    birthdayAnimation.style.display =
                        "none";

                }


                if (loader) {

                    loader.style.display =
                        "flex";

                }

            }
        );

    }


    /* =========================================
       OPEN SURPRISE
    ========================================= */

    if (startBtn) {

        startBtn.addEventListener(
            "click",
            function () {

                if (loader) {

                    loader.style.display =
                        "none";

                }


                if (main) {

                    main.style.display =
                        "block";

                }


                if (music) {

                    music.play()
                        .catch(function () {});

                }

            }
        );

    }


    /* =========================================
       PHOTO / VIDEO SWIPE
    ========================================= */

    const boxes =
        document.querySelectorAll(
            ".swipe-box"
        );


    boxes.forEach(
        function (box) {

            let startX = 0;
            let startY = 0;


            box.addEventListener(
                "touchstart",
                function (event) {

                    if (
                        !event.touches ||
                        !event.touches[0]
                    ) {
                        return;
                    }


                    startX =
                        event.touches[0].clientX;

                    startY =
                        event.touches[0].clientY;

                },
                {
                    passive: true
                }
            );


            box.addEventListener(
                "touchend",
                function (event) {

                    if (
                        !event.changedTouches ||
                        !event.changedTouches[0]
                    ) {
                        return;
                    }


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
                {
                    passive: true
                }
            );

        }
    );

});
