import ProductCard from "./ProductCard";

export default function Product(props) {
  let { products, setCart, cart } = props;
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {products.map((e, i) => (
        <ProductCard
          key={i}
          element={e}
          setCart={setCart}
          cart={cart}
        ></ProductCard>
      ))}
    </div>
  );
}
