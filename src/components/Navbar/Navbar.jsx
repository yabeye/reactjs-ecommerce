import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import useStyles from './styles';

function Navbar({ totalItems }) {
  const classes = useStyles();
  return (
    <>
      <AppBar color="inherit" className={classes.appBar} position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Ecommerce
          </Typography>
          <div className={classes.grow} />
          <IconButton component={Link} to="/cart" color="inherit">
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
