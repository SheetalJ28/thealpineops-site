import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import baseUrl from "../../constants/baseUrl";
import HeaderStoriesViewer from "../InstaStories/HeaderStoriesViewer";

const Header = () => {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [storiesEnabled, setStoriesEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    const updateStoriesEnabled = (
      event: MediaQueryList | MediaQueryListEvent,
    ) => {
      setStoriesEnabled(event.matches);
    };

    updateStoriesEnabled(mediaQuery);
    mediaQuery.addEventListener("change", updateStoriesEnabled);

    return () => mediaQuery.removeEventListener("change", updateStoriesEnabled);
  }, []);

  return (
    <header className="topHeader" aria-label="Site header">
      <div className="headerBrand">
        {storiesEnabled ? (
          <button
            type="button"
            className="headerLogo"
            title="Open Alpine Ops stories"
            onClick={() => setViewerOpen(true)}
            aria-label="Open Alpine Ops stories"
          >
            <img
              src={`${baseUrl}assets/images/logo.png`}
              alt="The Alpine Ops logo"
            />
          </button>
        ) : (
          <Link
            className="headerLogo"
            to="/"
            title="The Alpine Ops homepage"
            aria-label="Go to homepage"
          >
            <img
              src={`${baseUrl}assets/images/logo.png`}
              alt="The Alpine Ops logo"
            />
          </Link>
        )}
        <span className="headerTitle">Alpine operations and expeditions</span>
      </div>

      <a
        className="headerWhatsapp"
        href="https://wa.me/917819983273"
        target="_blank"
        rel="noreferrer"
      >
        <span className="whatsappIcon" aria-hidden="true">
          <img src={`${baseUrl}assets/images/svg/whatsapp.svg`} alt="" />
        </span>
        <span className="whatsappNumber">+91 78199 83273</span>
      </a>
      <HeaderStoriesViewer
        open={storiesEnabled && viewerOpen}
        onClose={() => setViewerOpen(false)}
      />
    </header>
  );
};

export default Header;
