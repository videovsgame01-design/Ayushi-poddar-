window.addEventListener("load", function () {

    /* =========================
       ELEMENTS
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

    const birthdayAnimation =
        document.getElementById("birthdayAnimation");


    /* =========================
       INITIAL STATE
    ========================= */

    loader.style.display = "none";
    main.style.display = "none";
    birthdayAnimation.style.display = "none";


    /* =========================
       PASSWORD
    ========================= */

    function unlockWebsite(){

        if(passwordInput.value === "5121314"){

            passwordError.textContent = "";

            /* Hide password */

            passwordScreen.style.display = "none";


            /* Start birthday animation directly */

            birthdayAnimation.style.display = "block";

        }
        else{

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
        function(event){

            if(event.key === "Enter"){

                unlockWebsite();

            }

        }
    );


    /* =========================
       BIRTHDAY ANIMATION
    ========================= */

    const arrow =
        document.getElementById("arrow");

    const target =
        document.getElementById("targetHeart");

    const continueBtn =
        document.getElementById("continueBtn");

    const birthdayTitle =
        document.getElementById("birthdayTitle");

    const tree =
        document.getElementById("tree");

    const aimHelp =
        document.querySelector(".aim-help");


    let dragging = false;


    /* =========================
       ARROW AIM
    ========================= */

    function aimArrow(x, y){

        const rect =
            arrow.getBoundingClientRect();

        const originX =
            rect.left + 10;

        const originY =
            rect.top + rect.height / 2;

        const dx =
            x - originX;

        const dy =
            y - originY;

        let angle =
            Math.atan2(dy, dx) * 180 / Math.PI;


        /* Natural aiming range */

        if(angle > 15){
            angle = 15;
        }

        if(angle < -75){
            angle = -75;
        }


        arrow.style.transform =
            "rotate(" + angle + "deg)";

    }


    arrow.addEventListener(
        "pointerdown",
        function(event){

            dragging = true;

            arrow.setPointerCapture(
                event.pointerId
            );

        }
    );


    arrow.addEventListener(
        "pointermove",
        function(event){

            if(!dragging) return;

            aimArrow(
                event.clientX,
                event.clientY
            );

        }
    );


    arrow.addEventListener(
        "pointerup",
        function(){

            if(!dragging) return;

            dragging = false;

            checkHit();

        }
    );


    arrow.addEventListener(
        "pointercancel",
        function(){

            dragging = false;

        }
    );


    /* =========================
       CHECK HIT
    ========================= */

    function checkHit(){

        const arrowRect =
            arrow.getBoundingClientRect();

        const heartRect =
            target.getBoundingClientRect();


        const tipX =
            arrowRect.right;

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


        if(distance < 120){

            hitHeart();

        }

    }


    /* =========================
       HEART HIT
    ========================= */

    function hitHeart(){

        if(
            target.classList.contains("hit-heart")
        ){
            return;
        }


        target.classList.add("hit-heart");

        arrow.style.opacity = "0";

        if(aimHelp){
            aimHelp.style.opacity = "0";
        }


        setTimeout(
            showBirthday,
            900
        );

    }


    /* =========================
       HAPPY BIRTHDAY
    ========================= */

    function showBirthday(){

        birthdayTitle.classList.add("show");


        setTimeout(
            function(){

                tree.classList.add("grow");

            },
            1200
        );


        setTimeout(
            function(){

                continueBtn.classList.add("show");

            },
            4000
        );

    }


    /* =========================
       CONTINUE
    ========================= */

    continueBtn.addEventListener(
        "click",
        function(){

            birthdayAnimation.style.display =
                "none";

            loader.style.display =
                "flex";

        }
    );


    /* =========================
       OPEN SURPRISE
    ========================= */

    startBtn.addEventListener(
        "click",
        function(){

            loader.style.display =
                "none";

            main.style.display =
                "block";


            if(music){

                music.play()
                    .catch(function(){});

            }

        }
    );


    /* =========================
       SWIPE BOX
    ========================= */

    const boxes =
        document.querySelectorAll(".swipe-box");


    boxes.forEach(
        function(box){

            let startX = 0;
            let startY = 0;


            box.addEventListener(
                "touchstart",
                function(event){

                    startX =
                        event.touches[0].clientX;

                    startY =
                        event.touches[0].clientY;

                },
                {passive:true}
            );


            box.addEventListener(
                "touchend",
                function(event){

                    const endX =
                        event.changedTouches[0].clientX;

                    const endY =
                        event.changedTouches[0].clientY;


                    const differenceX =
                        endX - startX;

                    const differenceY =
                        endY - startY;


                    if(
                        Math.abs(differenceX) > 50 &&
                        Math.abs(differenceX) >
                        Math.abs(differenceY)
                    ){

                        box.classList.add(
                            "revealed"
                        );

                    }

                },
                {passive:true}
            );

        }
    );

});
