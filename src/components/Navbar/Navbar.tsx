import { NavLink } from "react-router-dom";
import navItemsData from "../../data/navItems.json";

type NavItem = {
  to: string;
  label: string;
  end?: boolean;
  iconPath: string;
};

const navItems = navItemsData as NavItem[];

type NavbarProps = {
  collapsed: boolean;
  onToggleCollapse: () => void;
};

const Navbar = ({ collapsed, onToggleCollapse }: NavbarProps) => {
  return (
    <>
      <nav
        className={`nav ${collapsed ? "navCollapsed" : ""}`}
        aria-label="Primary"
      >
        <div className="desktopNav">
          <div className="desktopLinks">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `desktopLink ${isActive ? "activeLink" : ""}`
                }
                title={item.label}
              >
                <span className="navIcon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path d={item.iconPath} />
                  </svg>
                </span>
                <span className="desktopLinkLabel">{item.label}</span>
              </NavLink>
            ))}
          </div>

          <div className="desktopBottom">
            <button
              type="button"
              className="collapseBtn"
              onClick={onToggleCollapse}
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              aria-pressed={collapsed}
            >
              <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                <path d="M14.7 6.3a1 1 0 0 1 0 1.4L10.4 12l4.3 4.3a1 1 0 1 1-1.4 1.4l-5-5a1 1 0 0 1 0-1.4l5-5a1 1 0 0 1 1.4 0z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div
        className="mobileBottomNav"
        role="navigation"
        aria-label="Mobile primary"
      >
        {navItems.map((item) => (
          <NavLink
            key={`mobile-${item.to}`}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `mobileLink ${isActive ? "activeLink" : ""}`
            }
            title={item.label}
          >
            <span className="navIcon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                <path d={item.iconPath} />
              </svg>
            </span>
            <span className="mobileLabel">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Navbar;
