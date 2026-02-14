import { useEffect, useRef } from "react";
import Hero from "../../components/Hero/Hero";
import baseUrl from "../../constants/baseUrl";
import styles from "./Home.module.scss";

const Home = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const reviewsRef = useRef<HTMLElement>(null);

  const reviews = [
    {
      name: "Arjun S.",
      review:
        "Well-structured training and strong leadership on terrain. The team pushed us safely beyond our comfort zone.",
    },
    {
      name: "Neha R.",
      review:
        "A disciplined outdoor experience with clear instruction, great planning, and excellent group support.",
    },
    {
      name: "Vikram T.",
      review:
        "Professional, practical, and intense in the best way. Highly recommended for mindset and endurance training.",
    },
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    let frame = 0;
    const sections = [
      { ref: aboutRef, speed: 0.07, max: 34 },
      { ref: reviewsRef, speed: 0.06, max: 28 },
    ];

    const clamp = (value: number, min: number, max: number) =>
      Math.min(max, Math.max(min, value));

    const updateParallax = () => {
      frame = 0;
      const viewportHeight = window.innerHeight;

      sections.forEach(({ ref, speed, max }) => {
        const element = ref.current;
        if (!element) return;
        const rect = element.getBoundingClientRect();
        const progress =
          (viewportHeight - rect.top) / (viewportHeight + rect.height);
        const centered = progress - 0.5;
        const shift = clamp(centered * viewportHeight * speed, -max, max);

        element.style.setProperty(
          "--section-parallax",
          `${shift.toFixed(2)}px`,
        );
      });
    };

    const queueUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateParallax);
      }
    };

    updateParallax();
    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("resize", queueUpdate);

    return () => {
      window.removeEventListener("scroll", queueUpdate);
      window.removeEventListener("resize", queueUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div>
        <Hero />
      </div>
      <section
        ref={aboutRef}
        className={`${styles.aboutSection} ${styles.parallaxSection}`}
      >
        <img
          className={styles.aboutLogo}
          src={`${baseUrl}assets/images/logo.png`}
          alt="The Alpine Ops logo"
        />
        <p>
          Alpine Operations and Expeditions is an adventure-led fitness company
          founded by retired Indian Army Officers, specializing in
          mountaineering, trekking, and extreme sports expeditions. We blend
          military-precision operations with thrilling outdoor challenges to
          build resilience, fitness, and unbreakable team spirit, transforming
          participants through high-altitude treks, mountaineering courses like
          our signature workshop "Mountain Pro" for all skill levels, plus
          fitness workshops and community events led by ex-military experts.
          Operated from Dehradun Valley by seasoned operatives, we prioritize
          safety, personalized coaching, and immersive experiences that foster
          lifelong adventure skills—join our thriving community for expeditions
          that push limits and create legends.
        </p>
      </section>
      <section
        ref={reviewsRef}
        className={`${styles.googleReviews} ${styles.parallaxSection}`}
      >
        <div className={styles.reviewsHeader}>
          <h2>Google Reviews</h2>
          <a
            href="https://www.google.com/search?q=The+Alpine+Ops+reviews"
            target="_blank"
            rel="noreferrer"
          >
            View on Google
          </a>
        </div>
        <div className={styles.reviewsGrid}>
          {reviews.map((item) => (
            <article key={item.name} className={styles.reviewCard}>
              <p className={styles.reviewStars} aria-label="5 star review">
                ★★★★★
              </p>
              <p className={styles.reviewCopy}>{item.review}</p>
              <p className={styles.reviewAuthor}>{item.name}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
