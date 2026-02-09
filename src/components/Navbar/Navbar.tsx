import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
// import ThemeToggle from "../ThemeToggle";

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
      <nav className="nav">
        <div className="inner">
          {/* Hamburger on LEFT */}
          <button
            aria-label="Menu"
            aria-expanded={open}
            className={`${"hamburger"} ${open ? "hamburgerOpen" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>

          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            ALPINE OPS
          </Link>

          <div className="links">
            <Link to="/programs">Programs</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            {/* <ThemeToggle /> */}
          </div>
        </div>
      </nav>

      <div
        ref={backdropRef}
        className="backdrop"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="mobileMenu"
        style={{ transform: "translateX(-100%)" }}
        role="dialog"
        aria-modal="true"
      >
        {/* CLOSE ICON INSIDE MENU */}
        <button
          className="closeBtn"
          aria-label="Close menu"
          onClick={closeMenu}
        >
          ✕
        </button>

        <Link className="mobileLink" to="/" onClick={closeMenu}>
          <span className="mobileIcon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M4 11.5 12 5l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z" />
            </svg>
          </span>
          Home
        </Link>
        <Link className="mobileLink" to="/programs" onClick={closeMenu}>
          <span className="mobileIcon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M5 4h14a1 1 0 0 1 1 1v14l-3-2-3 2-3-2-3 2-3-2-3 2V5a1 1 0 0 1 1-1z" />
            </svg>
          </span>
          Programs
        </Link>
        <Link className="mobileLink" to="/about" onClick={closeMenu}>
          <span className="mobileIcon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M12 3a6 6 0 1 1-6 6 6 6 0 0 1 6-6zm0 12c4.4 0 8 2.2 8 4.5V21H4v-1.5C4 17.2 7.6 15 12 15z" />
            </svg>
          </span>
          About
        </Link>
        <Link className="mobileLink" to="/contact" onClick={closeMenu}>
          <span className="mobileIcon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm0 2.2 8 5 8-5V8l-8 5-8-5z" />
            </svg>
          </span>
          Contact
        </Link>

        {/* <ThemeToggle /> */}
      </div>
    </>
  );
};

export default Navbar;
