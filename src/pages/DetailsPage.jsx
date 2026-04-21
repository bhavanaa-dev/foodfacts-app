import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function DetailsPage() {

    const handleSave = () => {
  const saved = JSON.parse(localStorage.getItem("savedFoods")) || [];

  // avoid duplicates
  const exists = saved.find((item) => item.code === product.code);

  if (!exists) {
    saved.push(product);
    localStorage.setItem("savedFoods", JSON.stringify(saved));
    alert("Saved!");
  } else {
    alert("Already saved!");
  }
};

  const { code } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(
        `https://world.openfoodfacts.org/api/v0/product/${code}.json`
      );
      const data = await res.json();
      setProduct(data.product);
    };

    fetchProduct();
  }, [code]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "15px",
          padding: "8px 12px",
          cursor: "pointer"
        }}
      >
        ⬅ Back
      </button>
      <button onClick={handleSave} style={{ marginBottom: "10px" }}>
  ❤️ Save
</button>

      <h2>{product.product_name || "No Name"}</h2>
      <p>{product.brands || "Unknown Brand"}</p>

      {product.image_url && (
        <img
          src={product.image_url}
          alt={product.product_name}
          width="200"
        />
      )}

      <h3>Nutrition Info</h3>

      <p>Calories: {product.nutriments?.energy_kcal || "N/A"} kcal</p>
      <p>Protein: {product.nutriments?.proteins || "N/A"} g</p>
      <p>Fat: {product.nutriments?.fat || "N/A"} g</p>
      <p>Carbs: {product.nutriments?.carbohydrates || "N/A"} g</p>
    </div>
  );
}

export default DetailsPage;