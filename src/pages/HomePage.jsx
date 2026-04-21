import { useState } from "react";
import SearchBar from "../components/SearchBar";
import FoodList from "../components/FoodList";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&json=1`
      );

      const data = await response.json();
      setProducts(data.products || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      <FoodList products={products} />
    </div>
  );
}

export default HomePage;