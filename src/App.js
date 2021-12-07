import { useEffect, useState } from 'react';
import './App.css';
import { Navbar, Products } from './components/index';
import { commerce } from './services/commerce';

function App() {
  // state variables //
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [error, setError] = useState(false);

  // end state variables //

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await commerce.products.list();
        //console.log(data);
        setProducts(data);
      } catch (error) {
        setError(true);
      }
    };
    const fetchCart = async () => {
      try {
        setCart(await commerce.cart.retrieve());
      } catch (error) {
        setError(true);
      }
    };
    fetchProducts();
    fetchCart();
  }, []);

  // Temporary Solution to handle Connection Error //
  if (error) return <p>Connection Error... Refresh the page!</p>;

  return (
    <div className="App">
      <Navbar totalItems={cart.total_items} />
      <Products products={products} />
    </div>
  );
}

export default App;
