import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadMealCategory, addMealToCart, removeMealFromCart } from '../../store/actions';
import selectors from '../../store/selectors';
import { Grid, Typography } from '@mui/material';
import Card from '../../components/Card';

function MealsCategoryList(props) {
  const { dispatch, records, cart, loading, error, success } = props;
  const params = useParams();
  

  useEffect(() => {
    if(params) {
      dispatch(loadMealCategory(params?.categoryitem))
    }
  }, [params]);

  const addToCart = (record) => {
    dispatch(addMealToCart(record));
  }  
  
  const removeFromCart = (record) => {
    dispatch(removeMealFromCart(record));
  }


  if(loading) {
    return 'Loading..';
  }


  return (
    <Grid container xs={12}>
      <Grid item>
        <Typography variant='h5' style={{ padding: '0px 40px',  }}>{params && params?.categoryitem && params?.categoryitem?.charAt(0).toUpperCase() + params?.categoryitem.slice(1)}</Typography>
      </Grid>
      <Grid container xs={12} style={{ gap: '25px', paddingLeft: '40px', marginTop: '20px', }} justifyContent="center">
          {records?.map(record => {
            const isCartRecord = cart && cart?.length > 0 ? cart.filter(el => el.idMeal === record?.idMeal) : false;
            let mealRecord = isCartRecord ? Object.assign({}, record, { quantity: isCartRecord && isCartRecord[0]?.quantity }) : record;
            
            return <Card key={record?.idMeal} {...mealRecord} addToCart={addToCart} removeFromCart={removeFromCart} />
          })}
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
    cart: selectCart()
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MealsCategoryList);