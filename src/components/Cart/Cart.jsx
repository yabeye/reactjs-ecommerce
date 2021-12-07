import { Button, Container, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';

import useStyle from './styles';

function Cart({ cart, onUpdateCartQuantity, onRemoveFromCart, onEmptyCart }) {
  const classes = useStyle();
  const EmptyCart = () => (
    <div>
      <div className={classes.toolbar} />
      <Typography gutterBottom variant="h5">
        You have no items in your shopping cart.Start adding some.{' '}
      </Typography>
      <Button
        component={Link}
        to="/"
        size="large"
        variant="contained"
        color="primary"
      >
        Go To Home
      </Button>
    </div>
  );

  const FilledCart = () => (
    <>
      <Typography
        gutterBottom
        variant="h4"
        align="center"
        className={classes.title}
      >
        Your Shopping Cart
      </Typography>
      <Grid container justifyContent="center" spacing={3}>
        {cart.line_items.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
            <CartItem
              item={item}
              onUpdateCartQuantity={onUpdateCartQuantity}
              onRemoveFromCart={onRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography gutterBottom variant="h5">
          SubTotal: ${cart.subtotal.formatted}
        </Typography>
        <div>
          <Button
            variant="outlined"
            type="button"
            color="secondary"
            size="large"
            className={classes.emptyButton}
            onClick={() => onEmptyCart()}
          >
            EMPITY CART
          </Button>
          <Button
            component={Link}
            to="/checkout"
            variant="contained"
            type="button"
            color="primary"
            size="large"
            className={classes.checkoutButton}
          >
            CHECKOUT
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      {cart.line_items &&
        (cart.line_items.length === 0 ? EmptyCart() : FilledCart())}
      {!cart.line_items && <p>getting your cart ...</p>}
    </Container>
  );
}

export default Cart;
