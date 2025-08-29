<script>
document.addEventListener("DOMContentLoaded", () => {
  const bg = document.querySelector("#home_BG");
  const strength = 30; // lower = subtle, higher = stronger

  // -------------------------
  // Desktop Mouse Parallax
  // -------------------------
  document.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    const offsetX = (x - 0.5) * strength;
    const offsetY = (y - 0.5) * strength;

    bg.style.backgroundPosition = `${50 + offsetX}% ${50 + offsetY}%`;
  });

  // -------------------------
  // Mobile Gyro Parallax
  // -------------------------
  function handleOrientation(e) {
    const x = e.gamma || 0; // left-right (-90 to 90)
    const y = e.beta  || 0; // front-back (-180 to 180)

    const offsetX = (x / 45) * strength;   // normalize to ~-1 to 1
    const offsetY = (y / 90) * strength;

    bg.style.backgroundPosition = `${50 + offsetX}% ${50 + offsetY}%`;
  }

  if (window.DeviceOrientationEvent) {
    if (typeof DeviceOrientationEvent.requestPermission === "function") {
      // iOS Safari (requires user gesture)
      document.body.addEventListener("click", () => {
        DeviceOrientationEvent.requestPermission().then((res) => {
          if (res === "granted") {
            window.addEventListener("deviceorientation", handleOrientation);
          }
        });
      }, { once: true });
    } else {
      // Android and most others
      window.addEventListener("deviceorientation", handleOrientation);
    }
  }
});
</script>
