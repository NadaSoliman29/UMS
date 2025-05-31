import { Tooltip, OverlayTrigger } from "react-bootstrap"; // ← Optional Bootstrap Tooltip
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { useSearch } from "../context/SearchContext";
export default function NavBar() {
  const {  setSearchTerm } = useSearch();
  const theme = useContext(ThemeContext);
  if (!theme) throw new Error("ThemeContext is not provided");
  const { isDark, toggleTheme } = theme;

  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </Tooltip>
  );
  return (
    <div className="navbar-fixed mb-2">
      <div className="topbar d-flex align-items-center justify-content-between px-4 py-2">
        <div className="d-flex align-items-center ms-auto gap-3"> 
          <OverlayTrigger placement="bottom" overlay={renderTooltip}>
            <button onClick={toggleTheme} className="btn btn-sm btn-outline-secondary rounded-circle moon"  aria-label="Toggle dark mode" >
              <i
                className={`fa-solid ${isDark ? "fa-sun" : "fa-moon"}`} style={{ fontSize: "16px" }}></i>
            </button>
          </OverlayTrigger>
          <div className="position-relative search-container">
            <input type="text" className="form-control"
              placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} />
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
          </div>
          <i className="fa-regular fa-bell bellicon"></i>
        </div>
      </div>
    </div>
  );
}
