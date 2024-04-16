import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';
import { useSelector } from 'react-redux';
import { Toolbar } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(props) {
  const cartItems = useSelector(state => state?.mealsReducer?.cart || []);
  const orderItems = useSelector(state => state?.mealsReducer?.orders || []);
  return (
    <>
      <BrowserRouter>
        <Header cartItems={cartItems} orderItems={orderItems}/>
        <Toolbar />
        <div style={{ padding: '30px 20px' }}>
          {props?.children}
        </div>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}



export default App;
