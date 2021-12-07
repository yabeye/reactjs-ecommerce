import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import useStyles from './styles';

function CartItem({ item, onUpdateCartQuantity }) {
  const classes = useStyles();

  // Helper inner functions //

  // End helper inner functions //

  return (
    <Card>
      <CardMedia
        title={item.name}
        image={item.image.url}
        alt="Item in Cart"
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {item.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          ${item.line_total.formatted}
        </Typography>
      </CardContent>
      <CardActions className={classes.cartActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() => onUpdateCartQuantity(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <p>{item.quantity}</p>
          <Button
            type="button"
            size="small"
            onClick={() => onUpdateCartQuantity(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button variant="contained" color="secondary">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

export default CartItem;
