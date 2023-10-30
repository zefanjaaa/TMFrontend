import "../styles/HomePage.css";
import { TestComponent } from "../utils/components.list";
const HomePage = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold">This is the homepage of TasteMate!</h1>
      </div>

      <div>
        <TestComponent />
      </div>
    </div>
  );
};

export default HomePage;
