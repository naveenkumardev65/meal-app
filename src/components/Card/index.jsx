import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { truncateString } from '../../utils/tools';
import Styles from './styles';


export default function CardComponet(props) {
  const { strMeal, strMealThumb, idMeal, price, quantity, addToCart, removeFromCart, category } = props;
  const navigate = useNavigate();
  const classes = Styles();

  const handleAddToCart = () => {
    addToCart(Object.assign({}, { idMeal, strMeal, price, strMealThumb, category }));
  }

  return (
    <Card sx={{ width: 230 }} className={classes.cardContainer}>
      <Grid onClick={() => navigate(`/catogoryDetails/${idMeal}`)}>
        <CardMedia
          component="img"
          height="194"
          image={strMealThumb}
          alt="Paella dish"
          style={{ height: '140px' }}
        />
        <CardContent style={{ padding: '6px' }}>
          <Typography variant="body1">
            {strMeal && truncateString(strMeal)}
          </Typography>
          <Typography variant="body2" style={{ fontWeight: 'bold'}}>
            ₹{price}
          </Typography>
        </CardContent>
      </Grid>
      <CardActions disableSpacing>
        {!quantity ? <Button
          color='buttonColor1'
          fullWidth
          variant='contained'
          className={classes.cartBtn}
          onClick={handleAddToCart}>
          Add to cart
        </Button> : <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button color="buttonColor1" variant="outlined" onClick={() => removeFromCart(Object.assign({}, { idMeal }))}>-</Button>
          <Button>{quantity}</Button>
          <Button color="buttonColor1" variant='contained' style={{ color: '#fff' }} onClick={handleAddToCart}>+</Button>
        </Grid>}
      </CardActions>
    </Card>
  );
}
