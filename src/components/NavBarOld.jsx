import { useState } from "react";
import { SignUp, SignIn } from "@clerk/clerk-react";

const NavBarOld = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const handleShowSignUp = () => setShowSignUp((prevState) => !prevState);
  const handleShowSignIn = () => setShowSignIn((prevState) => !prevState);
  return (
    <nav>
      <div>
        <img src="TasteMadeLogo.svg" alt="logo" />
        <p>TasteMate</p>
      </div>

      <div>
        <a href="/">Home</a>

        <a href="/allrecipes">All recipes</a>

        <a href="/about">About</a>
      </div>
      <div>
        {!showSignIn && <button onClick={handleShowSignUp}>Sign Up</button>}
        {!showSignUp && <button onClick={handleShowSignIn}>Sign In</button>}
        <p>test</p>
      </div>
      <div>
        <div>{showSignUp ? <SignUp /> : showSignIn ? <SignIn /> : null}</div>
      </div>
    </nav>
  );
};
export default NavBarOld;
