     window.onload = function () {

    const loader = document.getElementById("loader");
    const main = document.getElementById("main");
    const startBtn = document.getElementById("startBtn");
    const music = document.getElementById("music");

    main.style.display = "none";


    /* OPEN SURPRISE */

    startBtn.addEventListener("click", function () {

        loader.style.display = "none";
        main.style.display = "block";

        if (music) {

            music.play().catch(function () {});

        }

    });


    /* =========================
       SWIPE BOXES
    ========================= */

    const boxes = document.querySelectorAll(".swipe-box");


    boxes.forEach(function (box) {

        let startX = 0;
        let startY = 0;


        box.addEventListener("touchstart", function (event) {

            startX = event.touches[0].clientX;
            startY = event.touches[0].clientY;

        }, { passive: true });


        box.addEventListener("touchend", function (event) {

            const endX = event.changedTouches[0].clientX;
            const endY = event.changedTouches[0].clientY;

            const differenceX = endX - startX;
            const differenceY = endY - startY;


            /*
             * Sirf horizontal swipe ko detect karo.
             * Isse normal page scrolling disturb nahi hogi.
             */

            if (
                Math.abs(differenceX) > 60 &&
                Math.abs(differenceX) > Math.abs(differenceY)
            ) {

                /*
                 * Abhi har box me ek hi item hai.
                 * Swipe hone par visual feedback milega.
                 */

                const content = box.querySelector(".swipe-content");

                content.style.transform = "translateX(" +
                    (differenceX > 0 ? "10px" : "-10px") +
                    ")";


                setTimeout(function () {

                    content.style.transform = "translateX(0)";

                }, 150);

            }

        }, { passive: true });

    });

};       
