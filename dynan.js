<script>
  document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  const offsetX = (0.5 - x) * 30; 
  const offsetY = (0.5 - y) * 30;

  const bg = document.querySelector("#home_BG");
  bg.style.backgroundPosition = `calc(50% + ${offsetX}px) calc(50% + ${offsetY}px)`;
});
</script>
