document.addEventListener("DOMContentLoaded", () => {
    const numStars = 100;
    const starsContainer = document.querySelector(".stars");
    for (let i = 0; i < numStars; i++) {
        let star = document.createElement("div");
        star.className = "star";
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDuration = (Math.random() * 2 + 1) + "s";
        starsContainer.appendChild(star);
    }
});

document.getElementById("showMore").addEventListener("click", () => {
    window.location.href = "about.html";
});
