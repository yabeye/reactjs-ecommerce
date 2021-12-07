import { Button, Grid, Typography } from '@material-ui/core';
import CartItem from './CartItem/CartItem';

import useStyle from './styles';

function Cart({ cart, onUpdateCartQuantity }) {
  const classes = useStyle();
  const EmptyCart = () => (
    <div>
      <div className={classes.toolbar} />
      <Typography>You have no items in the cart, Add </Typography>
      <Button>Go To Home</Button>
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
            <CartItem item={item} onUpdateCartQuantity={onUpdateCartQuantity} />
          </Grid>
        ))}
      </Grid>
    </>
  );

  return (
    <>
      <div className={classes.toolbar} />
      {cart.line_items && (cart.line_items === 0 ? EmptyCart() : FilledCart())}
      {!cart.line_items && <p>Loading...</p>}
    </>
  );
}

export default Cart;
