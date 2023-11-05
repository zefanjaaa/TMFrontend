import { Routes, Route } from "react-router-dom";
import { HomePage, About, AllRecipes } from "./utils/pages.list";
import { ClerkProvider } from "@clerk/clerk-react";
import { NavBarOld, NavBar } from "./utils/components.list";
if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw "Missing Publishable Key";
}

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <div>
      <ClerkProvider publishableKey={clerkPubKey}>
        <NavBar />
        {/* <NavBarOld /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/allrecipes" element={<AllRecipes />} />
        </Routes>
      </ClerkProvider>
    </div>
  );
}

export default App;
