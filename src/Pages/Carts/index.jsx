import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addMealToCart, removeMealFromCart, placeOrder } from '../../store/actions';
import selectors from '../../store/selectors';
import { Grid, Typography, Button } from '@mui/material';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import Styles from './styles';
import { truncateString } from '../../utils/tools';


function Cart(props) {
  const { dispatch, carts } = props;
  const classes = Styles();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, []);

  const addToCart = (record) => {
    dispatch(addMealToCart(record));
  }

  const removeFromCart = (record) => {
    dispatch(removeMealFromCart(record));
  }

  const totalAmount = carts && carts.length > 0 ? carts.reduce((acc, el) => {
    return acc += el?.quantity * el?.price;
  }, 0) : 0;

  const handlePlaceOrder = () => {
    dispatch(placeOrder(carts));
  }


  if (loading) {
    return 'Loading...'
  }

  if (!carts?.length) {
    return <Grid container xs={12} className={classes.emptyCart}>
      <RemoveShoppingCartIcon style={{ width: '100%', height: '100px' }} />
      <Typography variant='h4'>Your Cart is Empty</Typography>
    </Grid>
  }

  return (
    <Grid container xs={12}>
      <Grid item>
        <Typography variant='h5' style={{ padding: '0px 40px', }}>Card Items</Typography>
      </Grid>
      <Grid container className={classes.container}>
        <Grid item md={6} xs={12}>
          {carts?.map(record => {
            return <Grid xs={12} item className={classes.card} onClick={() => navigate(`/catogoryDetails/${record?.idMeal}`)}>
              <Grid xs={2}>
                <img src={record?.strMealThumb} className={classes.img} />
              </Grid>
              <Grid container xs={10} justifyContent="space-between" wrap='wrap'>
                <Grid item>
                  <Typography variant='h6'>{record?.strMeal}</Typography>
                  <Typography variant='h6'>₹{record?.price}</Typography>
                </Grid>
                <Grid item style={{ alignContent: 'center' }}>
                  <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button color="primary" variant="outlined" onClick={(e) => {
                      e.stopPropagation();
                      removeFromCart(Object.assign({}, { idMeal: record?.idMeal }))
                    }}>-</Button>
                    <Button>{record?.quantity}</Button>
                    <Button color="primary" variant='contained' onClick={(e) => {
                      e.stopPropagation();
                      addToCart(Object.assign({}, record))
                    }}>+</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          })}
        </Grid>
        <Grid item md={4} xs={12}>
          <Grid className={classes.summaryContainer}>
            <Typography variant='h4' className={classes.title}>Summary</Typography>
            <Grid item className={classes.summaryContent}>
              {carts?.map(record => <Grid style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <Typography>{record?.strMeal && truncateString(record?.strMeal)}</Typography>
                <Typography>{record?.quantity} x {record?.price} = {record?.quantity * record?.price} </Typography>
              </Grid>)}
            </Grid>
            <Grid style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Typography variant='h6' style={{ paddingRight: '15px' }}>Total: {totalAmount}</Typography>
            </Grid>
          </Grid>
          <Button 
            variant='contained' 
            fullWidth 
            color='buttonColor' 
            className={classes.placeOrderBtn}
            onClick={handlePlaceOrder}
          >
            Place Order
          </Button>
        </Grid>

      </Grid>
    </Grid>
  )
}



const mapStateToProps = (state) => {
  const {
    selectMealCategory,
    selectCart,
    selectLoading,
    selectError,
    selectSuccess
  } = selectors(state);

  return {
    loading: selectLoading(),
    error: selectError(),
    success: selectSuccess(),
    records: selectMealCategory(),
    carts: selectCart()
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);