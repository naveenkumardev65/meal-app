import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadMealDetails, addMealToCart, removeMealFromCart } from '../../store/actions';
import selectors from '../../store/selectors';
import { Grid, Typography } from '@mui/material';
import CardDetails from '../../components/CardDetails';

function MealsDetails(props) {
  const { dispatch, record, loading, cart, error, success } = props;
  const params = useParams();
  const isCartRecord = cart && cart?.length > 0 ? cart.filter(el => el.idMeal === record?.idMeal) : false;
  let mealRecord = isCartRecord ? Object.assign({}, record, { quantity: isCartRecord && isCartRecord[0]?.quantity }) : record;
  

  useEffect(() => {
    if(params) {
      dispatch(loadMealDetails(params?.id))
    }
  }, [params]);

  const addToCart = (value) => {
    dispatch(addMealToCart(value));
  }

  const removeFromCart = (value) => {
    dispatch(removeMealFromCart(value));
  }

  if(loading) {
    return 'Loading..';
  }


  return (
    <Grid container xs={12}>
      <Grid item>
        <Typography variant="h3" style={{ fontWeight: 'bold'}}>{mealRecord && mealRecord?.strCategory + ' / ' + mealRecord?.strMeal}</Typography>
      </Grid>
      <Grid container xs={12} style={{ marginTop: '20px' }}>
          {mealRecord ? <CardDetails {...mealRecord} addToCart={addToCart} removeFromCart={removeFromCart}/>: null}
      </Grid>
    </Grid>
  )
}



const mapStateToProps = (state) => {
  const { selectMealDetails, selectLoading, selectError, selectSuccess, selectCart } = selectors && selectors(state);
  return {
    loading: selectLoading(),
    error: selectError(),
    success: selectSuccess(),
    record: selectMealDetails(),
    cart: selectCart()
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MealsDetails);