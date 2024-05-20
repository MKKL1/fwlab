import './App.css';
import Products from "./components/Products";
import {useState} from "react";
import Header from "./components/Header";

function App() {
    const [products, setProducts] = useState(
[
        {
          "id": 1,
          "name": "mleko",
          "category": "diary",
          "quantity": 1
        },
        {
          "id": 2,
          "name": "chleb",
          "category": "bread",
          "quantity": 1
        },
        {
          "id": 3,
          "name": "jabłka",
          "category": "fruit&vagetables",
          "quantity": 2
        }
        ]);

    const deleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id))
    }



    return (
      <div className="App">
        <Header title="Lista zakupów" />
          {products.length > 0 ? <Products products={products} onDelete={deleteProduct}/>:<p>Brak produktów</p>}
      </div>
    );
}

export default App;
