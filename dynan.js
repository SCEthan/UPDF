#home_BG {
  position: relative;
  background: url(IMG/AlperPEAK.png) no-repeat center center;
  background-size: 105%; /* only the image gets oversized */
  min-height: 120vh;
  transition: background-position 0.1s ease;
  overflow: hidden;
}

#home_BG::before {
  content: "";
  position: absolute;
  inset: 0; /* shorthand for top:0; right:0; bottom:0; left:0 */
  background: linear-gradient(
    rgba(0, 0, 0, 0.95) 0%,
    rgba(56, 227, 213, 0.6) 115%
  );
  z-index: 1;
  pointer-events: none; /* let clicks pass through */
}
