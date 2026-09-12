window.onload = function () {

    const passwordScreen = document.getElementById("passwordScreen");
    const passwordInput = document.getElementById("passwordInput");
    const passwordBtn = document.getElementById("passwordBtn");
    const passwordError = document.getElementById("passwordError");

    const loader = document.getElementById("loader");
    const main = document.getElementById("main");
    const startBtn = document.getElementById("startBtn");
    const music = document.getElementById("music");

    main.style.display = "none";
    loader.style.display = "none";

    // =========================
    // PASSWORD SYSTEM
    // =========================

    passwordBtn.addEventListener("click", function () {

        if (passwordInput.value === "5121314") {

            passwordScreen.style.display = "none";
            loader.style.display = "flex";

        } else {

            passwordError.innerText = "❌ Wrong Password";

        }

    });


    // =========================
    // LOADER
    // =========================

    startBtn.addEventListener("click", function () {

        loader.style.display = "none";
        main.style.display = "block";

        // Start music
        if (music) {
            music.play().catch(function () {});
        }

    });


    // =========================
    // SWIPE PHOTOS / VIDEO
    // =========================

    document.querySelectorAll(".swipe-area").forEach(function (area) {

        let startX = 0;
        let startY = 0;

        area.addEventListener("touchstart", function (event) {

            const touch = event.changedTouches[0];

            startX = touch.clientX;
            startY = touch.clientY;

        }, { passive: true });


        area.addEventListener("touchend", function (event) {

            const touch = event.changedTouches[0];

            const endX = touch.clientX;
            const endY = touch.clientY;

            const diffX = endX - startX;
            const diffY = endY - startY;

            // Only horizontal swipe
            if (
                Math.abs(diffX) > 50 &&
                Math.abs(diffX) > Math.abs(diffY)
            ) {

                const box = area.closest(".swipe-box");

                if (box) {
                    box.classList.add("revealed");
                }

            }

        }, { passive: true });

    });

};
