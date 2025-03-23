document.addEventListener("DOMContentLoaded", () => {
    const numStars = 100;
    const body = document.body;
    for (let i = 0; i < numStars; i++) {
        let star = document.createElement("div");
        star.className = "star";
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDuration = (Math.random() * 2 + 1) + "s";
        body.appendChild(star);
    }
});
