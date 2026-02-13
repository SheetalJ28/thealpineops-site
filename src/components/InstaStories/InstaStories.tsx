import { useEffect, useState } from "react";
import Stories from "react-insta-stories";
import baseUrl from "../../constants/baseUrl";

type StoryItem = {
  id: string;
  url: string;
  type?: "video";
  previewUrl: string;
  header: {
    heading: string;
    subheading: string;
    profileImage: string;
  };
};

type IgStoriesPayload = {
  updatedAt: string;
  items: Array<{
    id: string;
    mediaType: "IMAGE" | "VIDEO";
    mediaUrl: string;
    thumbnailUrl?: string | null;
    timestamp: string;
    permalink?: string | null;
  }>;
};

const fallbackStories: StoryItem[] = [
  "/assets/images/main2.jpg",
  "/assets/images/main4.jpg",
  "/assets/images/main6.jpg",
  "/assets/images/main7.jpg",
].map((path, index) => ({
  id: `fallback-${index + 1}`,
  url: `${baseUrl}${path.slice(1)}`,
  previewUrl: `${baseUrl}${path.slice(1)}`,
  header: {
    heading: "Alpine Ops",
    subheading: `Story ${index + 1}`,
    profileImage: `${baseUrl}assets/images/logo.png`,
  },
}));

const instagramProfileUrl = "https://www.instagram.com/thealpineops";

const InstaStories = () => {
  const [stories, setStories] = useState<StoryItem[]>(fallbackStories);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    const loadStories = async () => {
      try {
        const response = await fetch(`${baseUrl}ig-stories.json`, {
          signal: controller.signal,
          cache: "no-store",
        });

        if (!response.ok) return;

        const payload = (await response.json()) as IgStoriesPayload;
        if (!payload.items || payload.items.length === 0) return;

        const mappedStories = payload.items
          .filter((item) => item.mediaUrl)
          .map((item, index) => ({
            id: item.id || `ig-${index + 1}`,
            url: item.mediaUrl,
            type: item.mediaType === "VIDEO" ? ("video" as const) : undefined,
            previewUrl:
              item.mediaType === "VIDEO"
                ? item.thumbnailUrl || item.mediaUrl
                : item.mediaUrl,
            header: {
              heading: "Alpine Ops",
              subheading: new Date(item.timestamp).toLocaleDateString(),
              profileImage: `${baseUrl}assets/images/logo.png`,
            },
          }));

        if (mappedStories.length > 0) {
          setStories(mappedStories);
          setActiveIndex(0);
        }
      } catch (_error) {
        // Ignore fetch errors and keep fallback stories.
      }
    };

    void loadStories();

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (stories.length <= 1) return;

    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stories.length);
    }, 4500);

    return () => window.clearInterval(id);
  }, [stories.length]);

  useEffect(() => {
    setActiveIndex((prev) => (prev >= stories.length ? 0 : prev));
  }, [stories.length]);

  const goTo = (index: number) => {
    setActiveIndex((index + stories.length) % stories.length);
  };

  const activeStory = stories[activeIndex];

  return (
    <section className="instaStories" aria-label="Instagram-style stories">
      <h2>Insta Stories</h2>
      <p className="instaStories__copy">
        Quick visual highlights from our recent training and outdoor sessions.
        {" "}
        <a href={instagramProfileUrl} target="_blank" rel="noreferrer">
          Follow @thealpineops
        </a>
      </p>
      <div className="instaStories__carousel" aria-label="Highlights carousel">
        <img
          src={activeStory.previewUrl}
          alt={`${activeStory.header.heading} ${activeStory.header.subheading}`}
        />
        <button
          type="button"
          className="instaStories__nav instaStories__nav--prev"
          onClick={() => goTo(activeIndex - 1)}
          aria-label="Previous highlight"
        >
          Prev
        </button>
        <button
          type="button"
          className="instaStories__nav instaStories__nav--next"
          onClick={() => goTo(activeIndex + 1)}
          aria-label="Next highlight"
        >
          Next
        </button>
        <div className="instaStories__dots" role="tablist" aria-label="Highlights">
          {stories.map((story, index) => (
            <button
              key={story.id}
              type="button"
              className={`instaStories__dot ${index === activeIndex ? "instaStories__dot--active" : ""}`}
              onClick={() => goTo(index)}
              aria-label={`Go to highlight ${index + 1}`}
              aria-pressed={index === activeIndex}
            />
          ))}
        </div>
      </div>
      <div className="instaStories__frame">
        <Stories
          stories={stories}
          width="100%"
          height="100%"
          defaultInterval={4500}
          keyboardNavigation
          loop
        />
      </div>
    </section>
  );
};

export default InstaStories;
