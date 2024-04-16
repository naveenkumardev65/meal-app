import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    container: {
        padding: '0 40px',
        marginTop: '20px',
        gap: '24px',
        [theme.breakpoints.down('sm')]: {
            padding: '0',
        }
    },
    cardContainer: {
        height: '179px',
        maxHeight: '200px',
        width: '200px',
        border: '1px solid #dbd4d4',
        boxShadow: '7px 7px 6px #f1f3f4',
    },
    emptyCart: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '15%'
    },
    card: {
        border: '1px solid #dbd4d4',
        boxShadow: '7px 7px 6px #f1f3f4',
        display: 'flex',
        padding: '10px',
        borderRadius: '2px',
        marginBottom: '20px',
        gap: '15px',
        cursor: 'pointer',
        transition: 'transform .2s',
        '&:hover': {
            transform: 'scale(1.03)'
        }
    },
    img: {
        height: '100%',
        width: '100%'
    },
    summaryContainer: {
        border: '1px solid #dbd4d4',
        boxShadow: '7px 7px 6px #f1f3f4',
        // padding: '1rem',
        height: '400px',
    },
    summaryContent: {
        height: '280px',
        overflowY: 'auto',
        padding: '10px',
        borderBottom: '1px solid #e1e1e1',
        "&::-webkit-scrollbar": {
            width: 10,
        },
        "&::-webkit-scrollbar-track": {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
            borderRadius: '30px'
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#474847",
            borderRadius: '30px'
        }
    },
    title: {
        marginBottom: '5px',
        padding: '15px',
        borderBottom: '1px solid #e1e1e1'
    },
    placeOrderBtn: {
        marginTop: '10px',
        color: '#fff',
        transition: 'transform .2s',
        '&:hover': {
            transform: 'scale(1.01)'
        }
    }
}));

export default useStyles;