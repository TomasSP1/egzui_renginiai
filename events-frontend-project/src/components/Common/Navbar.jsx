import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../auth/AuthContext";

import LogoutBtn from "./LogoutBtn";

import "../CSS/Navbar.css";

function Navigation() {
  const { isLoggedIn, userRole, userEmail, user } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [showBurgerIcon, setShowBurgerIcon] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setShowBurgerIcon(false);

    setTimeout(() => {
      setShowBurgerIcon(true);
    }, 500);
  };

  console.log("userEmail", user);

  return (
    <>
      <nav id="Navbar">
        {/* links */}
        <div className="Nav_Link">
          

          <div className="links">
            <a href="/">HOME</a>
            <a href="/about">ABOUT</a>
          </div>
        </div>

        

        {/* buttons */}
        <div id="Btns_Panel">
          {isLoggedIn ? (
            // buttons when logged in
            <>
              {/* Hamburger menu */}
              <button
                id="BurgerMenu"
                onClick={toggleMenu}
                className={showBurgerIcon ? "show" : "hide"}
                style={{ backgroundColor: isOpen ? "#bb86fc" : "#03dac6" }}
              >
                {isOpen ? (
                  <i className="fa-solid fa-times"></i> // Close button icon
                ) : (
                  <i className="fa-solid fa-bars"></i> // Burger button icon
                )}
              </button>
              {/* _______________ */}

              <div
                id="SlideMenu"
                className={`slide-menu ${isOpen ? "slide-menu-open" : ""}`}
              >
                {/* green buttons  */}
                <div className="btnsDiv">
                  {userRole === "admin" && (
                    <Link
                      to="/admin_panel"
                      className="greenBtn"
                    >
                      <i className="fa-solid fa-toolbox"></i>
                    </Link>
                  )}
                  <Link
                    to="/add_event"
                    title="Add event"
                    className="greenBtn"
                  >
                    <p>Add event</p>
                  </Link>
                  <Link
                    to="/favorites"
                    title="My favorites"
                    className="greenBtn"
                  >
                    <p>My favorites</p>
                  </Link>
                  <Link
                    to="/my_events"
                    title="My events"
                    className="greenBtn"
                  >
                    <p>My events</p>
                  </Link>

                  <div
                    className="greenBtn, logout_btn"
                    title="Log Out"
                  >
                    <LogoutBtn />
                  </div>
                </div>
                {/* green btns end here */}

                {/* welcome text */}
                <div className="welcomeText">
                  <p>
                    Welcome,{" "}
                    {userEmail
                      ? userEmail.replace(/@.*$/, "").charAt(0).toUpperCase() +
                        userEmail.slice(1).replace(/@.*$/, "")
                      : " Guest"}
                  </p>
                </div>
              </div>
            </>
          ) : (
            // buttons when logged out
            <>
              <div className="btnsDivNoAuth">
                <Link
                  to="/login"
                  className="greenBtn"
                >
                  <i className="fa-regular fa-user"></i>
                </Link>
              </div>

              <div className="welcomeTextNoAuth">
                <p>Please register or login</p>
              </div>
            </>
          )}
        </div>
        {/* buttons end */}
      </nav>
    </>
  );
}

export default Navigation;
