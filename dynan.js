<script>
document.addEventListener("DOMContentLoaded", () => {
  const bg = document.querySelector("#home_BG");

  // -------------------------
  // Desktop Mouse Parallax
  // -------------------------
  document.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    const offsetX = (0.5 - x) * 30; // adjust strength
    const offsetY = (0.5 - y) * 30;

    bg.style.backgroundPosition = `calc(50% + ${offsetX}px) calc(50% + ${offsetY}px)`;
  });

  // -------------------------
  // Mobile Gyro Parallax
  // -------------------------
  const sensitivity = 30; // adjust tilt strength

  function handleOrientation(e) {
    let x = e.gamma; // left-right (-90 to 90)
    let y = e.beta;  // front-back (-180 to 180)

    // normalize ranges
    let xPercent = (x + 90) / 180;
    let yPercent = (y + 180) / 360;

    let posX = 50 - (xPercent - 0.5) * sensitivity;
    let posY = 50 - (yPercent - 0.5) * sensitivity;

    bg.style.backgroundPosition = `${posX}% ${posY}%`;
  }

  if (window.DeviceOrientationEvent) {
    if (typeof DeviceOrientationEvent.requestPermission === "function") {
      // iOS requires a user gesture (like tapping a button)
      document.body.addEventListener("click", () => {
        DeviceOrientationEvent.requestPermission().then((res) => {
          if (res === "granted") {
            window.addEventListener("deviceorientation", handleOrientation);
          }
        });
      }, { once: true });
    } else {
      // Android, most browsers
      window.addEventListener("deviceorientation", handleOrientation);
    }
  }
});
</script>
