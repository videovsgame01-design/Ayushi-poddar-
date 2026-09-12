document.addEventListener("DOMContentLoaded", function () {

    const passwordScreen = document.getElementById("passwordScreen");
    const passwordInput = document.getElementById("passwordInput");
    const passwordBtn = document.getElementById("passwordBtn");
    const passwordError = document.getElementById("passwordError");

    const loader = document.getElementById("loader");
    const startBtn = document.getElementById("startBtn");
    const main = document.getElementById("main");
    const music = document.getElementById("music");


    // Starting state
    if (passwordScreen) {
        passwordScreen.style.display = "flex";
    }

    if (loader) {
        loader.style.display = "none";
    }

    if (main) {
        main.style.display = "none";
    }


    // Password check
    function unlockWebsite() {

        const password = passwordInput.value.trim();

        if (password === "5121314") {

            passwordError.textContent = "";

            passwordScreen.style.display = "none";

            loader.style.display = "flex";

        } else {

            passwordError.textContent = "❌ Wrong Password ❤️";

            passwordInput.value = "";

            passwordInput.focus();
        }
    }


    // Unlock button
    passwordBtn.addEventListener("click", unlockWebsite);


    // Enter key
    passwordInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
            unlockWebsite();
        }

    });


    // Open Surprise
    startBtn.addEventListener("click", function () {

        loader.style.display = "none";

        main.style.display = "block";

        if (music) {
            music.play().catch(function () {});
        }

    });


    // Swipe photos
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


            if (
                Math.abs(differenceX) > 50 &&
                Math.abs(differenceX) > Math.abs(differenceY)
            ) {

                box.classList.add("revealed");

            }

        }, { passive: true });

    });

});
