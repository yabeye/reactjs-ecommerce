import { useEffect, useState } from 'react';
import { Cart, Navbar, Products } from './components/index';
import { commerce } from './services/commerce';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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

  // additional methods //

  const handleAddToCart = async (productId, quantity) => {
    try {
      const item = await commerce.cart.add(productId, quantity);
      console.log('Item ', item);
      setCart(item.cart);
    } catch (error) {
      setError(true);
    }
  };

  const handleUpdateCartQuantity = async (productId, quantity) => {
    try {
      const { cart } = await commerce.cart.update(productId, { quantity });
      setCart(cart);
      console.log(cart);
    } catch (error) {
      setError(error);
    }
  };

  // end additional methods //
  console.log('On App.js cart', cart);
  //# Temporary Solution to handle Connection Error #//
  if (error) return <p>Connection Error... Refresh the page!</p>;

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route path="/" exact>
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route path="/cart" exact>
            <Cart cart={cart} onUpdateCartQuantity={handleUpdateCartQuantity} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
