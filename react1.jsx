import React from "react";
import Product from "./Product";

function App() {
  return (
    <div>
      <h1>My Demo Shop</h1>
      <Product
        title={product1.title}
        price={product1.price}
        description={product1.description}
      />
      <Product
        title={product2.title}
        price={product2.price}
        description={product2.description}
      />
    </div>
  );
}

export default App;