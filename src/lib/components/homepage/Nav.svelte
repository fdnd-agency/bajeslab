<script>
// ...
</script>

<header>
  <a href="/" class="logo"><span>Healthy Urban</span>Living Lab</a>
  <button popovertarget="menu" class="menu-toggle">☰</button>
  <nav id="menu" popover>
    <button popovertarget="menu" popovertargetaction="hide" class="menu-close">✕</button>  
      <ul>
        <li><a href="/over-ons">Over ons</a></li>
        <li><a href="/projecten">Projecten</a></li>
        <li><a href="/netwerk">Netwerk</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
  </nav>
</header>

<style>
/* ---- HEADER ---- */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem clamp(1rem, 4vw, 2rem);
  background: rgba(255, 255, 255, 0.386);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, .1);
}

/* ---- LOGO ---- */
span {
  display: block;
  font-size: 0.8em;
  line-height: 1.2;
  letter-spacing: 0.02em;
  font-weight: 700;
}

.logo {
  font-family: "Tilt Warp", sans-serif;
  font-size: clamp(1.3rem, 1.5vw, 1.125rem);
  color: var(--color-accent2-d1);
  line-height: 1.1;
  white-space: nowrap;
  font-weight: 400;
}

.menu-toggle,
.menu-close {
  font-size: 2rem;
  color: var(--color-accent2-d1);
}

.menu-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
</style>