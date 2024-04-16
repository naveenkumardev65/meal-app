import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CssBaseline from '@mui/material/CssBaseline'
import { useNavigate } from 'react-router-dom';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


export default function Header({ cartItems, orderItems }) {
    const navigate = useNavigate();

    const mealCount = cartItems && Array.isArray(cartItems) && cartItems.length > 0 ? cartItems.reduce((acc, el) =>  acc += el.quantity, 0) : 0;

    return (
        <Box sx={{ flexGrow: 1 }}>
            <CssBaseline />
            <AppBar position="fixed">
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { sm: 'block' } }}
                        style={{ cursor: 'pointer' }}
                        onClick={() => navigate('/')}
                    >
                        E-Shop
                    </Typography>
                    <Box sx={{ display: { md: 'flex' } }}>
                        <IconButton
                            size="large"
                            color="inherit"
                            onClick={() => navigate('/orders')}
                        >
                            
                            {orderItems?.length ? <Badge badgeContent={orderItems?.length} color="error">
                                <ShoppingBagIcon />
                            </Badge>: <ShoppingBagIcon />}
                        </IconButton>
                        <IconButton
                            size="large"
                            color="inherit"
                            onClick={() => navigate('/card')}
                        >
                            {mealCount ? <Badge badgeContent={mealCount || '0'} color="error">
                                <ShoppingCartIcon />
                            </Badge> : <ShoppingCartIcon />}
                        </IconButton>
                        
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
