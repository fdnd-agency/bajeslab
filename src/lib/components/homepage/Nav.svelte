<script>
// ...
</script>

<header>
  <a href="/" class="logo"><span>Healthy Urban</span>Living Lab</a>
  <button popovertarget="menu" class="menu-toggle" aria-label="Open menu">☰</button>
  <nav id="menu" popover>
    <button popovertarget="menu" popovertargetaction="hide" class="menu-close" aria-label="Sluit menu">✕</button>  
      <ul>
        <li><a href="/over-ons" class="text">Over ons</a></li>
        <li><a href="/projecten" class="text">Projecten</a></li>
        <li><a href="/netwerk" class="text">Netwerk</a></li>
        <li><a href="/contact" class="text">Contact</a></li>
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

/* ---- MOBILE MENU BUTTONS  ---- */
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

/* ---- POPOVER MENU ---- */
[popover] {
  position: fixed;
  inset: 0;
  width: 100%;
  height: min(60dvh, 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  transform: translateY(-100%);
  opacity: 0;
  transition: transform 350ms ease, opacity 200ms ease;
  pointer-events: none;
}

[popover]:popover-open {
  transform: translateY(0);
  opacity: 1;
  pointer-events: auto;
}

ul {
  text-align: center;
  padding: 0;
  margin: 0;
}

li {
  border-bottom: 2px solid var(--color-accent2-d1);
}

a {
  display: block;
  padding: 1rem;
  color: var(--color-accent2-d1);
  font-size: 1.2rem;
}

/* ---- DESKTOP MENU ---- */

@media (min-width: 960px) {
  .menu-toggle,
  .menu-close {
    display: none;
  }

  [popover] {
    position: static;
    transform: none;
    opacity: 1;
    pointer-events: auto;
    background: none;
    border: none;
    box-shadow: none;
    height: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 2rem;
  }

  ul {
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
  }

  li {
    border: none;
  }

  a {
    color: black;
  }

  #menu a:hover {
      color: var(--color-accent2-d1);
      text-decoration: underline;
    }
}
</style>