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

    const aimArea = document.querySelector(".aim-area");
    const bow = document.querySelector(".bow");
    const bowString = document.querySelector(".bow-string");
    const aimHelp = document.querySelector(".aim-help");


    /* =========================================
       SAFETY CHECK
    ========================================= */

    if (!passwordScreen || !passwordInput || !passwordBtn) {
        console.error("Password elements missing from index.html");
        return;
    }


    /* =========================================
       ARCHERY DESIGN OVERRIDE
       Existing HTML ko change karne ki zarurat nahi
    ========================================= */

    function addArcheryStyles() {

        if (document.getElementById("newArcheryStyles")) {
            return;
        }

        const style = document.createElement("style");
        style.id = "newArcheryStyles";

        style.textContent = `

        /* -------------------------------
           ARCHERY AREA
        -------------------------------- */

        .aim-area {
            position: absolute !important;
            inset: 0 !important;
            overflow: visible !important;
            touch-action: none !important;
        }


        /* -------------------------------
           BOW
        -------------------------------- */

        .bow {
            position: absolute !important;

            left: 18% !important;
            bottom: 10% !important;

            width: 110px !important;
            height: 155px !important;

            border-left: 8px solid #6d3b24 !important;
            border-radius: 50% !important;

            transform: rotate(-8deg) !important;

            z-index: 5 !important;

            filter:
                drop-shadow(0 5px 5px rgba(0,0,0,.25));
        }


        /* -------------------------------
           BOW STRING
        -------------------------------- */

        .bow-string {
            position: absolute !important;

            left: calc(18% + 108px) !important;
            bottom: 10% !important;

            width: 3px !important;
            height: 155px !important;

            background: #fff !important;

            transform: none !important;

            z-index: 6 !important;

            box-shadow:
                0 0 4px rgba(255,255,255,.8);
        }


        /* -------------------------------
           ARROW
        -------------------------------- */

        .arrow {
            position: absolute !important;

            width: 155px !important;
            height: 7px !important;

            background:
                linear-gradient(
                    to right,
                    #7a4329 0%,
                    #a9653b 75%,
                    #d9d9d9 76%,
                    #ffffff 100%
                ) !important;

            border-radius: 10px !important;

            transform-origin: 10px 50% !important;

            z-index: 20 !important;

            cursor: grab !important;

            touch-action: none !important;

            box-shadow:
                0 2px 5px rgba(0,0,0,.25);
        }


        /* Arrow tip */

        .arrow::after {
            content: "";

            position: absolute;

            right: -7px;
            top: 50%;

            width: 0;
            height: 0;

            transform: translateY(-50%);

            border-top: 7px solid transparent;
            border-bottom: 7px solid transparent;
            border-left: 13px solid #d7d7d7;

            filter:
                drop-shadow(0 1px 2px rgba(0,0,0,.3));
        }


        /* Arrow feathers */

        .arrow::before {
            content: "";

            position: absolute;

            left: 12px;
            top: 50%;

            width: 18px;
            height: 12px;

            transform:
                translateY(-50%)
                rotate(45deg);

            border-radius: 2px 8px 2px 8px;

            background: #e85d75;
        }


        /* -------------------------------
           TARGET HEART
        -------------------------------- */

        .target-heart {
            position: absolute !important;

            width: 78px !important;
            height: 78px !important;

            background:
                linear-gradient(
                    135deg,
                    #ff416c,
                    #ff1744 55%,
                    #c51162
                ) !important;

            border-radius: 18px 0 18px 18px !important;

            transform: rotate(-45deg) !important;

            box-shadow:
                0 0 15px rgba(255,65,108,.7),
                0 0 35px rgba(255,65,108,.35);

            z-index: 10 !important;

            transition:
                transform .5s ease,
                opacity .5s ease;
        }


        .target-heart::before,
        .target-heart::after {
            content: "";

            position: absolute;

            width: 78px;
            height: 78px;

            background:
                linear-gradient(
                    135deg,
                    #ff416c,
                    #ff1744 55%,
                    #c51162
                );

            border-radius: 50%;
        }


        .target-heart::before {
            top: -39px;
            left: 0;
        }


        .target-heart::after {
            top: 0;
            left: 39px;
        }


        .target-heart .shine {
            position: absolute;

            width: 18px;
            height: 28px;

            left: 17px;
            top: 15px;

            background: rgba(255,255,255,.7);

            border-radius: 50%;

            transform: rotate(45deg);

            z-index: 5;
        }


        /* Extra target ring */

        .target-ring {
            position: absolute;

            width: 112px;
            height: 112px;

            left: -17px;
            top: -17px;

            border: 2px solid rgba(255,255,255,.65);

            border-radius: 50%;

            transform: rotate(45deg);

            box-shadow:
                0 0 15px rgba(255,255,255,.25);

            animation: targetPulse 1.8s ease-in-out infinite;

            pointer-events: none;

            z-index: -1;
        }


        @keyframes targetPulse {

            0%, 100% {
                transform:
                    rotate(45deg)
                    scale(.92);

                opacity: .45;
            }

            50% {
                transform:
                    rotate(45deg)
                    scale(1.08);

                opacity: .9;
            }
        }


        /* Hit animation */

        .hit-heart {
            animation:
                heartHit .8s ease forwards !important;
        }


        @keyframes heartHit {

            0% {
                transform:
                    rotate(-45deg)
                    scale(1);
            }

            35% {
                transform:
                    rotate(-45deg)
                    scale(1.3);
            }

            100% {
                transform:
                    rotate(-45deg)
                    scale(.1);

                opacity: 0;
            }
        }


        /* -------------------------------
           HELP TEXT
        -------------------------------- */

        .aim-help {
            z-index: 30 !important;

            transition:
                opacity .3s ease,
                transform .3s ease;
        }


        /* -------------------------------
           MOBILE
        -------------------------------- */

        @media (max-width: 600px) {

            .bow {
                left: 8% !important;
                bottom: 11% !important;

                width: 90px !important;
                height: 130px !important;

                border-left-width: 7px !important;
            }

            .bow-string {
                left: calc(8% + 88px) !important;
                bottom: 11% !important;

                height: 130px !important;
            }

            .arrow {
                width: 135px !important;
                height: 6px !important;
            }

            .target-heart {
                width: 65px !important;
                height: 65px !important;
            }

            .target-heart::before,
            .target-heart::after {
                width: 65px;
                height: 65px;
            }

            .target-heart::before {
                top: -32px;
            }

            .target-heart::after {
                left: 32px;
            }

            .target-ring {
                width: 95px;
                height: 95px;

                left: -15px;
                top: -15px;
            }
        }

        `;

        document.head.appendChild(style);
    }


    addArcheryStyles();


    /* =========================================
       ADD TARGET RING
    ========================================= */

    if (targetHeart && !targetHeart.querySelector(".target-ring")) {

        const ring = document.createElement("span");

        ring.className = "target-ring";

        targetHeart.appendChild(ring);
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
       ARCHERY VARIABLES
    ========================================= */

    let dragging = false;

    let currentAngle = -27;

    let arrowHit = false;

    let arrowHomeTimer = null;


    /* =========================================
       ARROW POSITION
    ========================================= */

    function positionArrow(resetAngle = false) {

        if (!arrow || !bowString || !aimArea) {
            return;
        }

        if (resetAngle) {
            currentAngle = -27;
        }

        const areaRect =
            aimArea.getBoundingClientRect();

        const stringRect =
            bowString.getBoundingClientRect();


        /*
         * Bow string ke exact center ko arrow ka nock point
         * banaya gaya hai.
         */

        const nockX =
            stringRect.left +
            stringRect.width / 2;

        const nockY =
            stringRect.top +
            stringRect.height / 2;


        /*
         * Arrow ka left side nock point par rakho.
         */

        const arrowX =
            nockX -
            areaRect.left -
            10;

        const arrowY =
            nockY -
            areaRect.top -
            arrow.offsetHeight / 2;


        arrow.style.left =
            arrowX + "px";

        arrow.style.top =
            arrowY + "px";


        arrow.style.transform =
            "rotate(" +
            currentAngle +
            "deg)";
    }


    /* =========================================
       GET ARROW ORIGIN
    ========================================= */

    function getArrowOrigin() {

        const areaRect =
            aimArea.getBoundingClientRect();

        const arrowStyle =
            getComputedStyle(arrow);

        const left =
            parseFloat(arrowStyle.left) || 0;

        const top =
            parseFloat(arrowStyle.top) || 0;


        return {

            x:
                areaRect.left +
                left +
                10,

            y:
                areaRect.top +
                top +
                arrow.offsetHeight / 2
        };
    }


    /* =========================================
       GET ARROW TIP
    ========================================= */

    function getArrowTip() {

        const origin =
            getArrowOrigin();

        const radians =
            currentAngle *
            Math.PI /
            180;


        /*
         * Arrow ki actual length.
         */

        const length =
            arrow.offsetWidth + 8;


        return {

            x:
                origin.x +
                Math.cos(radians) *
                length,

            y:
                origin.y +
                Math.sin(radians) *
                length
        };
    }


    /* =========================================
       ROTATE ARROW
    ========================================= */

    function rotateArrow(x, y) {

        if (!arrow || !aimArea) {
            return;
        }


        const origin =
            getArrowOrigin();


        const dx =
            x - origin.x;

        const dy =
            y - origin.y;


        let angle =
            Math.atan2(dy, dx) *
            180 /
            Math.PI;


        /*
         * Arrow ko sirf upar/target direction
         * mein aim karne dena.
         */

        if (angle > 12) {
            angle = 12;
        }

        if (angle < -78) {
            angle = -78;
        }


        currentAngle = angle;


        arrow.style.transform =
            "rotate(" +
            currentAngle +
            "deg)";
    }


    /* =========================================
       CHECK HIT
    ========================================= */

    function checkArrowHit() {

        if (
            !arrow ||
            !targetHeart ||
            arrowHit
        ) {
            return false;
        }


        const tip =
            getArrowTip();

        const heartRect =
            targetHeart.getBoundingClientRect();


        const heartX =
            heartRect.left +
            heartRect.width / 2;

        const heartY =
            heartRect.top +
            heartRect.height / 2;


        const dx =
            tip.x - heartX;

        const dy =
            tip.y - heartY;


        const distance =
            Math.sqrt(
                dx * dx +
                dy * dy
            );


        /*
         * Hit area intentionally thoda forgiving rakha hai
         * taaki mobile par easy rahe.
         */

        const hitDistance =
            window.innerWidth <= 600
                ? 100
                : 115;


        if (distance <= hitDistance) {

            shootArrowToHeart();

            return true;
        }


        return false;
    }


    /* =========================================
       SHOOT ARROW TO HEART
    ========================================= */

    function shootArrowToHeart() {

        if (arrowHit) {
            return;
        }

        arrowHit = true;


        if (aimHelp) {
            aimHelp.style.opacity = "0";
        }


        const heartRect =
            targetHeart.getBoundingClientRect();


        const targetX =
            heartRect.left +
            heartRect.width / 2;

        const targetY =
            heartRect.top +
            heartRect.height / 2;


        const radians =
            currentAngle *
            Math.PI /
            180;


        const length =
            arrow.offsetWidth + 8;


        /*
         * Tip ko heart center par le jaane ke liye
         * arrow ka nock point calculate karo.
         */

        const newNockX =
            targetX -
            Math.cos(radians) *
            length;

        const newNockY =
            targetY -
            Math.sin(radians) *
            length;


        const areaRect =
            aimArea.getBoundingClientRect();


        const newLeft =
            newNockX -
            areaRect.left -
            10;

        const newTop =
            newNockY -
            areaRect.top -
            arrow.offsetHeight / 2;


        arrow.style.transition =
            "left .45s ease-out, " +
            "top .45s ease-out, " +
            "opacity .25s ease";


        arrow.style.left =
            newLeft + "px";

        arrow.style.top =
            newTop + "px";


        setTimeout(function () {

            if (targetHeart) {

                targetHeart.classList.add(
                    "hit-heart"
                );
            }

        }, 250);


        setTimeout(function () {

            arrow.style.opacity = "0";

        }, 400);


        setTimeout(function () {

            showBirthday();

        }, 850);
    }


    /* =========================================
       RESET ARROW
    ========================================= */

    function resetArrow() {

        if (!arrow || arrowHit) {
            return;
        }


        arrow.style.transition =
            "left .35s ease, " +
            "top .35s ease, " +
            "transform .35s ease";


        positionArrow(true);
    }


    /* =========================================
       ARROW POINTER EVENTS
    ========================================= */

    if (
        arrow &&
        targetHeart &&
        aimArea &&
        bowString
    ) {

        arrow.addEventListener(
            "pointerdown",
            function (event) {

                if (arrowHit) {
                    return;
                }


                event.preventDefault();


                dragging = true;


                arrow.setPointerCapture(
                    event.pointerId
                );


                arrow.style.cursor =
                    "grabbing";


                arrow.style.transition =
                    "none";
            }
        );


        arrow.addEventListener(
            "pointermove",
            function (event) {

                if (!dragging || arrowHit) {
                    return;
                }


                event.preventDefault();


                rotateArrow(
                    event.clientX,
                    event.clientY
                );
            }
        );


        arrow.addEventListener(
            "pointerup",
            function (event) {

                if (!dragging) {
                    return;
                }


                event.preventDefault();


                dragging = false;


                arrow.style.cursor =
                    "grab";


                if (
                    arrow.hasPointerCapture(
                        event.pointerId
                    )
                ) {

                    arrow.releasePointerCapture(
                        event.pointerId
                    );
                }


                const hit =
                    checkArrowHit();


                if (!hit) {

                    clearTimeout(
                        arrowHomeTimer
                    );


                    arrowHomeTimer =
                        setTimeout(
                            resetArrow,
                            180
                        );
                }
            }
        );


        arrow.addEventListener(
            "pointercancel",
            function () {

                dragging = false;

                arrow
