import Hero from "../components/Hero/Hero";
import InstaStories from "../components/InstaStories/InstaStories";

const Home = () => {
  return (
    <>
      <div className="homeDesktopOnly">
        <Hero />
      </div>
      <div className="homeMobileTabletOnly">
        <InstaStories />
      </div>
      <section>
        <h2>Our Philosophy</h2>
        <p>
          We train resilience, discipline, and tactical thinking through
          real-world outdoor and survival programs.
        </p>
      </section>
    </>
  );
};

export default Home;
