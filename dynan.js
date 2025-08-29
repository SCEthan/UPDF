document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  const offsetX = (0.5 - x) * 40;
  const offsetY = (0.5 - y) * 40;

  document.querySelector("#home_BG").style.backgroundPosition =
    `calc(50% + ${offsetX}px) calc(50% + ${offsetY}px)`;
});
