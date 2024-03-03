document.addEventListener("DOMContentLoaded", function () {

    function toggleImg(event) {
    var images = document.querySelectorAll("#cards-container img");
    if (isDisplayHeroImg.checked) {
        images.forEach(function (img) {
        img.style.display = "block";
        });
    } else {
        images.forEach(function (img) {
        img.style.display = "none";
        });
    }
    }
    function togglePower(event) {
    var heroPowers = document.querySelectorAll("#cards-container .hero-power");
    if (isDisplayHeroPower.checked) {
        heroPowers.forEach(function (heroPower) {
        heroPower.style.display = "block";
        });
    } else {
        heroPowers.forEach(function (heroPower) {
        heroPower.style.display = "none";
        });
    }
    }

    let isDisplayHeroImg = document.getElementById("is-display-hero-img");
    let isDisplayHeroPower = document.getElementById("is-display-hero-power");
    isDisplayHeroImg.addEventListener("change", toggleImg);
    isDisplayHeroPower.addEventListener("change", togglePower);});
