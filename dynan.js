const homeBG = document.querySelector("#home_BG");
const strength = 30; // tweak for movement intensity

// --- Mouse movement ---
document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  homeBG.style.setProperty("--bg-x", `${50 + (x - 0.5) * strength}%`);
  homeBG.style.setProperty("--bg-y", `${50 + (y - 0.5) * strength}%`);
});

// --- Device orientation (mobile gyro) ---
if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", (e) => {
    // gamma = left/right tilt, beta = forward/back tilt
    const x = (e.gamma || 0) / 45; // normalize to -1..1
    const y = (e.beta || 0) / 45;

    homeBG.style.setProperty("--bg-x", `${50 + x * strength}%`);
    homeBG.style.setProperty("--bg-y", `${50 + y * strength}%`);
  }, true);
}
