import { Link } from "react-router-dom";
import baseUrl from "../../constants/baseUrl";

const Header = () => {
  return (
    <header className="topHeader" aria-label="Site header">
      <div className="headerBrand">
        <Link to="/" className="headerLogo" title="The Alpine Ops">
          <img src={`${baseUrl}assets/images/logo.png`} alt="The Alpine Ops logo" />
        </Link>
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
    </header>
  );
};

export default Header;
