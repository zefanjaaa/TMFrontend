import { useState } from "react";
import { SignUp, SignIn } from "@clerk/clerk-react";

const NavBar = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const handleShowSignUp = () => setShowSignUp((prevState) => !prevState);
  const handleShowSignIn = () => setShowSignIn((prevState) => !prevState);
  return (
    <nav style={{ display: "flex", justifyContent: "space-between" }}>
      <div
        style={{ display: "flex", alignItems: "center" }}
        className="ml-10 mt-20"
      >
        <img src="TasteMadeLogo.svg" alt="logo" className="w-20 h-20" />
        <h1 className="font-bold text-2xl">TasteMate</h1>
      </div>
      <div></div>
      <div className="mt-20">
        <a href="/" className="mr-4">
          Home
        </a>
        <a href="/about" className="mr-4">
          About
        </a>
        <a href="/allrecipes" className="ml-4">
          All recipes
        </a>
      </div>
      <div className="font-bold mt-20">
        <button className="mr-10" onClick={handleShowSignUp}>
          Sign Up
        </button>
        <button onClick={handleShowSignIn}>Sign In</button>
      </div>
      <div>
        {showSignUp ? <SignUp /> : <p></p>}
        {showSignIn ? <SignIn /> : <p></p>}
      </div>
    </nav>
  );
};
export default NavBar;
