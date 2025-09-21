import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="container">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Shopping Cart
      </h2>
      <div className="row">
        <div className="col left">
          <ProductList />
        </div>
        <div className="col right">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
