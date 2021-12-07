import { CircularProgress, Grid, Typography } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

function Products({ products, onAddToCart }) {
  const classes = useStyles();

  if (products.length === 0) {
    return (
      <div className={classes.content}>
        <div className={classes.toolbar} />
        <div style={{ textAlign: 'center' }}>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            getting products ...
          </Typography>
          <CircularProgress />
        </div>
      </div>
    );
  }

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products;
