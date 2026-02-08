import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ThemeToggle from "../ThemeToggle";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  // GSAP slide from LEFT
  useEffect(() => {
    if (!menuRef.current) return;

    gsap.to(menuRef.current, {
      x: open ? 0 : "-100%",
      duration: 0.45,
      ease: "power3.out",
    });

    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // ESC key close
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  useEffect(() => {
    if (!menuRef.current || !backdropRef.current) return;

    gsap.to(menuRef.current, {
      x: open ? 0 : "-100%",
      duration: 0.45,
      ease: "power3.out",
    });

    gsap.to(backdropRef.current, {
      opacity: open ? 1 : 0,
      pointerEvents: open ? "auto" : "none",
      duration: 0.3,
      ease: "power2.out",
    });

    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.inner}>
          {/* Hamburger on LEFT */}
          <button
            aria-label="Menu"
            aria-expanded={open}
            className={`${styles.hamburger} ${
              open ? styles.hamburgerOpen : ""
            }`}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>

          <Link to="/" className={styles.brand} onClick={() => setOpen(false)}>
            ALPINE OPS
          </Link>

          <div className={styles.links}>
            <Link to="/programs">Programs</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <div
        ref={backdropRef}
        className={styles.backdrop}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={styles.mobileMenu}
        style={{ transform: "translateX(-100%)" }}
        role="dialog"
        aria-modal="true"
      >
        {/* CLOSE ICON INSIDE MENU */}
        <button
          className={styles.closeBtn}
          aria-label="Close menu"
          onClick={closeMenu}
        >
          ✕
        </button>

        <Link className={styles.mobileLink} to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link className={styles.mobileLink} to="/programs" onClick={closeMenu}>
          Programs
        </Link>
        <Link className={styles.mobileLink} to="/about" onClick={closeMenu}>
          About
        </Link>
        <Link className={styles.mobileLink} to="/contact" onClick={closeMenu}>
          Contact
        </Link>

        <ThemeToggle />
      </div>
    </>
  );
};

export default Navbar;
