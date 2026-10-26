function createStars() {
  const starsContainer = document.getElementById("stars-container");
  if (!starsContainer) return;

  const starCount = 50;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.innerHTML = "★";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.fontSize = Math.random() * 10 + 8 + "px";
    star.style.animationDelay = Math.random() * 3 + "s";
    starsContainer.appendChild(star);
  }
}

createStars();
