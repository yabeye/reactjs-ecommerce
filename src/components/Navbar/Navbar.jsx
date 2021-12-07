import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';

function Navbar({ totalItems }) {
  const classes = useStyles();
  return (
    <AppBar color="inherit" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Ecommerce
        </Typography>
        <div className={classes.grow} />
        <IconButton color="inherit">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
