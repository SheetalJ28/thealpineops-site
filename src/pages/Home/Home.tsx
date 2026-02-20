import { useEffect, useRef } from "react";
import Hero from "../../components/Hero/Hero";
import HomeReviews from "../../components/HomeReviews/HomeReviews";
import baseUrl from "../../constants/baseUrl";
import reviewsData from "../../data/reviews.json";
import styles from "./Home.module.scss";

type ReviewItem = {
  name: string;
  review: string;
};

const Home = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const reviewsRef = useRef<HTMLElement>(null);

  const reviews = reviewsData as ReviewItem[];

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
      <HomeReviews
        sectionRef={reviewsRef}
        className={styles.parallaxSection}
        reviews={reviews}
      />
    </>
  );
};

export default Home;
