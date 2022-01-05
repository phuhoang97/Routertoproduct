import ProductCard from "./ProductCard"

export default function CartPage(props) {
    let { cart, setCart } = props;

    return (
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            {cart.map((e, i) => <ProductCard element={e} setCart={setCart} cart={cart} />)}
        </div>
    )
}
