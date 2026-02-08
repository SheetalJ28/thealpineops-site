import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Hero.module.scss";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(ref.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section ref={ref} className={styles.hero}>
      <h1>The Alpine Ops</h1>
      <p>Elite survival & leadership programs.</p>
    </section>
  );
};

export default Hero;
