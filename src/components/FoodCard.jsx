function FoodCard({ product }) {
  if (!product) return null;

  return (
    <div className = "food-card">
      <h2>{product.product_name || "No Name"}</h2>
      <p>{product.brands || "Unknown Brand"}</p>

      {product.image_url && (
        <img src={product.image_url} alt={product.product_name} width="150" />
      )}

      <p>Calories: {product.nutriments?.energy_kcal} kcal</p>
      <p>Protein: {product.nutriments?.proteins} g</p>
      <p>Fat: {product.nutriments?.fat} g</p>
    </div>
  );
}

export default FoodCard;