import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import SavedPage from "./pages/SavedPage";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>FoodFacts 🍔</h1>

      {/* Navigation */}
      <div style={{ textAlign: "center", marginBottom: "15px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>
        <Link to="/saved">Saved ❤️</Link>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:code" element={<DetailsPage />} />
        <Route path="/saved" element={<SavedPage />} />
      </Routes>
    </div>
  );
}

export default App;