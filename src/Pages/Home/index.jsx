import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadMealCategories } from '../../store/actions';
import selectors from '../../store/selectors';
import { Typography, Grid } from '@mui/material';
import Styles from './styles';
import { Link } from 'react-router-dom';

function Home(props) {
  const { dispatch, categories, loading, error, success } = props;
  const classes = Styles();

  useEffect(() => {
    dispatch(loadMealCategories(true));
  }, []);

  if (loading) {
    return 'Loading...';
  }

  return (
    <div>
      <Typography variant='h5' className={classes.title}>Categories</Typography>
      <Grid container xs={12} className={classes.container}>
        {categories?.map((category, index) => {
          return <Grid item key={category?.idCategory} className={classes.cardContainer}>
            <Link to={{ pathname: `/catogory/${category?.strCategory?.toLowerCase()}` }} className={classes.link}>
              <Grid item className={classes.categoryImage} >
                <img src={category?.strCategoryThumb} alt='No image' style={{ width: '100%', padding: '10px' }} />
              </Grid>
              <div className={classes.horizontalLine}></div>
              <Typography className={classes.categoryTitle}>{category?.strCategory}</Typography>
            </Link>

          </Grid>
        })}
      </Grid>
    </div>
  )
}


const mapStateToProps = (state) => {
  const { selectMealCategories, selectLoading, selectError, selectSuccess } = selectors && selectors(state);
  return {
    categories: selectMealCategories(),
    loading: selectLoading(),
    error: selectError(),
    success: selectSuccess(),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);