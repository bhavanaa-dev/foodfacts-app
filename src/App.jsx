import { useState } from "react";
import SearchBar from "./components/SearchBar";
import FoodList from "./components/FoodList";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&search_simple=1&action=process&json=1`
      );

      const data = await response.json();

      setProducts(data.products || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>FoodFacts 🍔</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}

      <FoodList products={products} />
    </div>
  );
}

export default App;