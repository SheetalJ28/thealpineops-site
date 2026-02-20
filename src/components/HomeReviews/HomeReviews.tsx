import { useEffect, useMemo, useState } from "react";
import type { RefObject } from "react";
import styles from "./HomeReviews.module.scss";

type ReviewItem = {
  name: string;
  review: string;
};

type HomeReviewsProps = {
  sectionRef: RefObject<HTMLElement | null>;
  className?: string;
  reviews: ReviewItem[];
};

const getCardsPerView = (width: number) => {
  if (width >= 1200) return 3;
  if (width >= 768) return 2;
  return 1;
};

const HomeReviews = ({ sectionRef, className = "", reviews }: HomeReviewsProps) => {
  const [cardsPerView, setCardsPerView] = useState(() =>
    typeof window === "undefined" ? 3 : getCardsPerView(window.innerWidth),
  );
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onResize = () => setCardsPerView(getCardsPerView(window.innerWidth));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const maxIndex = useMemo(
    () => Math.max(0, reviews.length - cardsPerView),
    [reviews.length, cardsPerView],
  );

  const clampedIndex = Math.min(activeIndex, maxIndex);
  const canGoPrev = clampedIndex > 0;
  const canGoNext = clampedIndex < maxIndex;
  const translate = (clampedIndex * 100) / cardsPerView;

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((part) => part[0]?.toUpperCase())
      .join("")
      .slice(0, 2);

  return (
    <section ref={sectionRef} className={`${styles.googleReviews} ${className}`.trim()}>
      <div className={styles.reviewsHeader}>
        <h2>What Our Clients Say About Us</h2>
        <div className={styles.headerActions}>
          <a
            href="https://www.google.com/search?q=The+Alpine+Ops+reviews"
            target="_blank"
            rel="noreferrer"
          >
            View on Google
          </a>
          <div className={styles.sliderControls} aria-label="Reviews navigation">
            <button
              type="button"
              className={styles.sliderArrow}
              onClick={() =>
                setActiveIndex((index) => Math.max(0, Math.min(index, maxIndex) - 1))
              }
              disabled={!canGoPrev}
              aria-label="Previous reviews"
            >
              ←
            </button>
            <button
              type="button"
              className={styles.sliderArrow}
              onClick={() =>
                setActiveIndex((index) => Math.min(maxIndex, Math.min(index, maxIndex) + 1))
              }
              disabled={!canGoNext}
              aria-label="Next reviews"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div className={styles.sliderViewport}>
        <div
          className={styles.reviewsTrack}
          style={{ transform: `translateX(-${translate}%)` }}
        >
          {reviews.map((item) => (
            <article
              key={item.name}
              className={styles.reviewCard}
              style={{ flexBasis: `${100 / cardsPerView}%` }}
            >
              <div className={styles.reviewTop}>
                <div className={styles.avatar}>{getInitials(item.name)}</div>
                <div className={styles.reviewMeta}>
                  <p className={styles.reviewAuthor}>{item.name}</p>
                  <p className={styles.reviewStars} aria-label="5 star review">
                    ★★★★★
                  </p>
                </div>
                <p className={styles.quoteMark} aria-hidden="true">
                  ❝
                </p>
              </div>
              <p className={styles.reviewCopy}>{item.review}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeReviews;
