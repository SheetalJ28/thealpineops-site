import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import baseUrl from "../../constants/baseUrl";
import gsap from "gsap";
import slidesData from "../../data/heroSlides.json";
// import styles from "./Hero.module.scss";

type HeroSlide = {
  title: string;
  copy: string;
  cta: string;
  to: string;
  image: string;
};

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = useMemo(
    () =>
      (slidesData as HeroSlide[]).map((slide) => ({
        ...slide,
        image: slide.image.startsWith("/")
          ? `${baseUrl}${slide.image.slice(1)}`
          : slide.image,
      })),
    [],
  );

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          clearProps: "opacity,transform",
        },
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(id);
  }, [slides.length]);

  const goTo = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  const activeSlide = slides[activeIndex];

  return (
    <section ref={ref} className="hero" aria-roledescription="carousel">
      <div className="media">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`${"slide"} ${index === activeIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}`}
          />
        ))}
        <div className="overlay" />
        <div className="controls">
          <button
            type="button"
            className="navButton"
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Previous slide"
          >
            Prev
          </button>
          <button
            type="button"
            className="navButton"
            onClick={() => goTo(activeIndex + 1)}
            aria-label="Next slide"
          >
            Next
          </button>
        </div>
      </div>

      <div className="content">
        <span className="kicker">Homepage feature</span>
        <h1>{activeSlide.title}</h1>
        <p>{activeSlide.copy}</p>
        <Link className="cta" to={activeSlide.to}>
          {activeSlide.cta}
        </Link>
        <div className="dots" role="tablist" aria-label="Slides">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              className={`$"dot} ${index === activeIndex ? "dotActive" : ""}`}
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-pressed={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
