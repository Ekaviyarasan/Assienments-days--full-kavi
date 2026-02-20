import { Products } from "../data/Products";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <div>
      <h1>MASS MENS VIEWER</h1>
      {Products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;