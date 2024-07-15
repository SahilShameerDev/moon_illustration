let lastStarTime = 0;
const starDelay = 100; // Delay in milliseconds

document.addEventListener("mousemove", function (e) {
  const currentTime = new Date().getTime();

  if (currentTime - lastStarTime > starDelay) {
    lastStarTime = currentTime;

    setTimeout(() => {
      const star = document.createElement("div");
      star.classList.add("star");
      star.textContent = "+";
      star.style.left = `${e.pageX}px`;
      star.style.top = `${e.pageY}px`;
      const textColor = getRandomColor();
      const shadowColor = getRandomColor();
      star.style.color = textColor;
      star.style.textShadow = `0 0 5px ${shadowColor}`;

      document.querySelector(".star-container").appendChild(star);

      setTimeout(() => {
        star.remove();
      }, 2000); // Remove the star after 1 second
    }, starDelay);

   
  }
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
