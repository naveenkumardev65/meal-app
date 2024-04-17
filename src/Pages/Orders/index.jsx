import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import selectors from '../../store/selectors';
import { Grid, Typography } from '@mui/material';
import WorkOffIcon from '@mui/icons-material/WorkOff';
import Styles from './styles';
import Spinner from '../../components/Spinner';
import { Link } from 'react-router-dom';


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
    return <Spinner />
  }

  if (!orders?.length) {
    return <Grid container xs={12} className={classes.emptyCart}>
      <WorkOffIcon style={{ width: '100%', height: '100px' }} />
      <Typography variant='h4'>Your shopping order is empty</Typography>
      <p>Please add items to your order.</p>
      <Link to={{ pathname: '/' }} style={{ color: '#2f2f2f' }}>Continue shopping</Link>
    </Grid>
  }

  return (
    <Grid container xs={12}>
      <Grid item>
        <Typography variant='h5' style={{ padding: '0px 40px' }}>Orders</Typography>
      </Grid>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          {orders?.map(record => {
            const orderTotalPrice = record?.items?.reduce((acc, el) => acc += el?.price * el?.quantity, 0);
            return <Grid item xs={12} className={classes.orderContainer}>
              <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <Typography variant='h6'>Order Id: {record?.id}</Typography>
                <Typography variant='h6'>Total: ₹{orderTotalPrice}</Typography>
              </Grid>
              <Typography variant='h6'>Items</Typography>
              {record?.items?.map(orderItem => {
                return <Grid xs={12} item className={classes.card}>
                  <Grid xs={2} style={{ height: '100px' }}>
                    <img src={orderItem?.strMealThumb} className={classes.img} />
                  </Grid>
                  <Grid container xs={10} justifyContent="space-between" wrap='wrap'>
                    <Grid item>
                      <Typography variant='h6'>{orderItem?.strMeal}</Typography>
                      <Typography variant='h6'>₹{orderItem?.price}</Typography>
                      <Typography variant='h6'>Qty: {orderItem?.quantity}</Typography>
                    </Grid>
                    <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant='h6'>Total: ₹{orderItem?.quantity * orderItem?.price}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              })}
            </Grid>
          })}
        </Grid>
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