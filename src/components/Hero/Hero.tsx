import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import styles from "./Hero.module.scss";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const baseUrl = import.meta.env.BASE_URL || "/";

  const slides = useMemo(
    () => [
      {
        title: "About The Alpine Ops",
        copy: "Built by expedition leaders and former operators. We train calm, capable teams for high-stakes environments.",
        cta: "Explore our story",
        to: "/about",
        image: `${baseUrl}assets/images/main1.jpg`,
      },
      {
        title: "Programs Built for Real Terrain",
        copy: "Field-tested survival, leadership, and resilience programs designed for teams that operate under pressure.",
        cta: "View programs",
        to: "/programs",
        image: `${baseUrl}assets/images/main2.jpg`,
      },
      {
        title: "Leadership That Holds Under Load",
        copy: "Decision-making frameworks, trust-building, and accountability systems for modern operators.",
        cta: "See leadership focus",
        to: "/programs",
        image: `${baseUrl}assets/images/main3.jpg`,
      },
      {
        title: "Let’s Plan Your Next Session",
        copy: "Custom engagements for organizations and individuals. Build a training arc that fits your mission.",
        cta: "Contact us",
        to: "/contact",
        image: `${baseUrl}assets/images/main4.jpg`,
      },
    ],
    [baseUrl]
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
        }
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
    <section ref={ref} className={styles.hero} aria-roledescription="carousel">
      <div className={styles.media}>
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`${styles.slide} ${
              index === activeIndex ? styles.active : ""
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}`}
          />
        ))}
        <div className={styles.overlay} />
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.navButton}
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Previous slide"
          >
            Prev
          </button>
          <button
            type="button"
            className={styles.navButton}
            onClick={() => goTo(activeIndex + 1)}
            aria-label="Next slide"
          >
            Next
          </button>
        </div>
      </div>

      <div className={styles.content}>
        <span className={styles.kicker}>Homepage feature</span>
        <h1>{activeSlide.title}</h1>
        <p>{activeSlide.copy}</p>
        <Link className={styles.cta} to={activeSlide.to}>
          {activeSlide.cta}
        </Link>
        <div className={styles.dots} role="tablist" aria-label="Slides">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              className={`${styles.dot} ${
                index === activeIndex ? styles.dotActive : ""
              }`}
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
