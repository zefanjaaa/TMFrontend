import { Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
import { HomePage } from "./utils/pages.list";
import { ClerkProvider } from "@clerk/clerk-react";

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw "Missing Publishable Key";
}

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <div>
      <ClerkProvider publishableKey={clerkPubKey}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ClerkProvider>
    </div>
  );
}

export default App;
