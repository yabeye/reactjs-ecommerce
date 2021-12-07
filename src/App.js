import { useEffect, useState } from 'react';
import './App.css';
import { Navbar, Products } from './components/index';
import { commerce } from './services/commerce';

function App() {
  // state variables //
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  // end state variables //

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await commerce.products.list();
      console.log(data);
      setProducts(data);
    };
    const fetchCart = async () => {
      setCart(await commerce.cart.retrieve());
    };
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div className="App">
      <Navbar totalItems={cart.total_items} />
      <Products products={products} />
    </div>
  );
}

export default App;
