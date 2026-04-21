import { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";

function SavedPage() {
  const [saved, setSaved] = useState([]);

  // Load saved foods on page load
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("savedFoods")) || [];
    setSaved(data);
  }, []);

  // Remove item from saved list
  const removeItem = (code) => {
    const updated = saved.filter((item) => item.code !== code);
    setSaved(updated);
    localStorage.setItem("savedFoods", JSON.stringify(updated));
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Saved Foods ❤️</h2>

      {saved.length === 0 ? (
        <p>No saved foods</p>
      ) : (
        <div className="food-list">
          {saved.map((item) => (
            <div key={item.code}>
              <FoodCard product={item} />
              
              <button
                onClick={() => removeItem(item.code)}
                style={{
                  marginTop: "5px",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SavedPage;