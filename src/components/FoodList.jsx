import FoodCard from "./FoodCard";

function FoodList({ products }) {
  if (!products || products.length === 0) {
    return <p>No results found</p>;
  }

  return (
    <div className = "food-list">
      {products.map((product, index) => (
        <FoodCard key={index} product={product} />
      ))}
    </div>
  );
}

export default FoodList;