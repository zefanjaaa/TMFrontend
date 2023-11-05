import { useState } from "react";
import { SignUp, SignIn } from "@clerk/clerk-react";
import "../styles/NavBar.css";

const NavBar = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const handleShowSignUp = () => setShowSignUp((prevState) => !prevState);
  const handleShowSignIn = () => setShowSignIn((prevState) => !prevState);

  return (
    <nav className="navbar navbar-expand-sm --bs-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="TasteMadeLogo.svg"
            alt="logo"
            className="d-inline-block align-text-top logo "
            width="100"
            height="100"
          />
          <h3>TasteMate</h3>
        </a>
        {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
            <a className="nav-link" href="/allrecipes">
              All Recipes
            </a>
            <a className="nav-link" href="/about">
              About
            </a>
            <div className="" href="">
              {!showSignIn && (
                <button onClick={handleShowSignUp}>Sign Up</button>
              )}
              {!showSignUp && (
                <button onClick={handleShowSignIn}>Sign In</button>
              )}
              <div>
                {showSignUp ? <SignUp /> : showSignIn ? <SignIn /> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
