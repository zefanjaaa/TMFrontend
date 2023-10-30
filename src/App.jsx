import { Routes, Route } from "react-router-dom";

import { HomePage } from "./utils/pages.list";
import { ClerkProvider } from "@clerk/clerk-react";
import { NavBar } from "./utils/components.list";
if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw "Missing Publishable Key";
}

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <div>
      <ClerkProvider publishableKey={clerkPubKey}>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ClerkProvider>
    </div>
  );
}

export default App;
