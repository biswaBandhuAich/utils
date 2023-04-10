import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  const [darkModeText, setdarkModeText] = useState("Enable Dark Mode");
  const [darkModeStatus, setdarkModeStatus] = useState(false);

  function toggleMode() {
    if (darkModeStatus) {
      setdarkModeText("Enable Dark Mode");
      setdarkModeStatus(false);
      props.darkMode(false);
    } else {
      setdarkModeStatus(true);
      setdarkModeText("Disable Dark Mode");
      props.darkMode(true);
    }
  }

  function textHeaderChange() {
    props.titleChange("Text Utils");
  }
  function newHeaderChange() {
    props.titleChange("News");
  }
  //"navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}"
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} sticky-top`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/tu"
                onClick={textHeaderChange}
              >
                Text Utility
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/et">
                Expense Tracker
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/news"
                onClick={newHeaderChange}
              >
                News
              </Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              onChange={toggleMode}
            />
            <label
              className={`form-check-label text-${
                props.mode === "dark" ? `white` : `black`
              }`}
              htmlFor="flexSwitchCheckChecked"
            >
              {darkModeText}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
