import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Styles from './styles';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


export default function CardDetails(props) {
    const { strMealThumb, strMeal, strInstructions, strTags, strYoutube, strArea, strCategory, idMeal, addToCart, price, quantity, removeFromCart } = props;
    const navigate = useNavigate();
    const classes = Styles();
    let tags = strTags && strTags?.length > 0 && strTags?.split(',') || false;

    const handleAddToCart = () => {
        addToCart(Object.assign({}, { idMeal, strMeal, price, strMealThumb, category: strCategory }));
    }

    return (
        <Grid container xs={12}>
            <Grid item md={3} xs={12} className={classes.imgContainer}>
                <img src={strMealThumb} style={{ width: '100%', height: '300px', borderRadius: '8px' }} alt={strMeal} />
            </Grid>
            <Grid item md={8} xs={12} style={{ paddingLeft: '20px' }}>
                <Typography variant="h4">
                    Title: {strMeal}
                </Typography>
                <Typography variant="h5">
                    Category: {strCategory}
                </Typography>
                <Typography variant="subtitle1">
                    Instructions: {strInstructions}
                </Typography>
                {tags ? <Stack direction="row" spacing={1}>
                    {tags?.map(e => e && e != '' ? <Chip label={e} color="info" /> : null)}
                </Stack> : null}
                <Grid className={classes.btnContainer}>
                    {!quantity ? <Button
                        color='buttonColor1'
                        fullWidth
                        variant='contained'
                        className={classes.button}
                        onClick={handleAddToCart}
                    >
                        Add to cart
                    </Button> : <Grid item xs={3} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button color="buttonColor1" variant="outlined" onClick={() => removeFromCart(Object.assign({}, { idMeal }))}>-</Button>
                        <Button>{quantity}</Button>
                        <Button color="buttonColor1" style={{ color: '#fff' }} variant='contained' onClick={handleAddToCart}>+</Button>
                    </Grid>}
                </Grid>
            </Grid>
        </Grid>
    );
}
