import { useState } from "react";
import { SignUp, SignIn } from "@clerk/clerk-react";

const NavBar = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const handleShowSignUp = () => setShowSignUp((prevState) => !prevState);
  const handleShowSignIn = () => setShowSignIn((prevState) => !prevState);
  return (
    <nav className="flex justify-between">
      <div className="flex items-center ml-20 mt-10">
        <img src="TasteMadeLogo.svg" alt="logo" className="w-20 h-20" />
        <p className="font-bold text-2xl pt-5 pr-5">TasteMate</p>
      </div>
      {/* <div className="mt-20"></div> */}
      <div className="mt-20">
        <a href="/" className="mr-4">
          Home
        </a>

        <a href="/allrecipes" className=" ml-4 mr-4">
          All recipes
        </a>

        <a href="/about" className="ml-4">
          About
        </a>
      </div>
      <div className="font-bold mt-20">
        {!showSignIn && (
          <button className="mr-10" onClick={handleShowSignUp}>
            Sign Up
          </button>
        )}
        {!showSignUp && <button onClick={handleShowSignIn}>Sign In</button>}
      </div>
      <div>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {showSignUp ? <SignUp /> : showSignIn ? <SignIn /> : null}
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
