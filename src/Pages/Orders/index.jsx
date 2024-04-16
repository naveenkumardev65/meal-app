import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import selectors from '../../store/selectors';
import { Grid, Typography } from '@mui/material';
import WorkOffIcon from '@mui/icons-material/WorkOff';
import Styles from './styles';


function Orders(props) {
  const { orders } = props;
  const classes = Styles();
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, []);


  if (loading) {
    return 'Loading...'
  }

  if (!orders?.length) {
    return <Grid container xs={12} className={classes.emptyCart}>
      <WorkOffIcon style={{ width: '100%', height: '100px' }} />
      <Typography variant='h4'>Your Order is Empty</Typography>
    </Grid>
  }

  return (
    <Grid container xs={12}>
      <Grid item>
        <Typography variant='h5' style={{ padding: '0px 40px', }}>Order Items</Typography>
      </Grid>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          {orders?.map(record => {
            const orderTotalPrice = record?.items?.reduce((acc, el) => {
              return acc += el?.price * el?.quantity;
            }, 0);
            return <Grid item xs={12} className={classes.orderContainer}>
              <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}> 
                <Typography variant='h6'>Order Id: {record?.id?.slice(0, 6)}</Typography>
                <Typography variant='h6'>Total: ₹{orderTotalPrice}</Typography>
              </Grid>
              {record?.items?.map(orderItem => {
              return <Grid xs={12} item className={classes.card}>
              <Grid xs={2}>
                <img src={orderItem?.strMealThumb} className={classes.img} />
              </Grid>
              <Grid container xs={10} justifyContent="space-between" wrap='wrap'>
                <Grid item>
                  <Typography variant='h6'>{orderItem?.strMeal}</Typography>
                  <Typography variant='h6'>₹{orderItem?.price}</Typography>
                </Grid>
                <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant='h6'>{orderItem?.price} x {orderItem?.price} = {orderItem?.price * orderItem?.price}</Typography>
                </Grid>
              </Grid>
            </Grid>
            })}
            </Grid>
            
            
          })}
        </Grid>
        {/* <Grid item md={4} xs={12}>
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
        </Grid> */}

      </Grid>
    </Grid>
  )
}



const mapStateToProps = (state) => {
  const {
    selectLoading,
    selectError,
    selectSuccess,
    selectOrders
  } = selectors(state);

  return {
    loading: selectLoading(),
    error: selectError(),
    success: selectSuccess(),
    orders: selectOrders(),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);