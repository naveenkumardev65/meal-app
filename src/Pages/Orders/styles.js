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
    orderContainer: {
        border: '1px solid #dbd4d4',
        boxShadow: '7px 7px 6px #f1f3f4',
        marginBottom: '50px !important',
        padding: '20px'
    },
    emptyCart: {
        flexDirection: 'column !important',
        alignItems: 'center',
        marginTop: '15%'
    },
    card: {
        border: '1px solid #dbd4d4',
        boxShadow: '7px 7px 6px #f1f3f4',
        display: 'flex',
        padding: '10px',
        borderRadius: '2px',
        marginBottom: '20px !important',
        gap: '15px',
        cursor: 'pointer',
    },
    img: {
        height: '100%',
        width: '100%',
        objectFit: 'cover'
    },
    summaryContainer: {
        border: '1px solid #dbd4d4',
        boxShadow: '7px 7px 6px #f1f3f4',
        height: '400px',
    },
    title: {
        marginBottom: '5px',
        padding: '15px',
        borderBottom: '1px solid #e1e1e1'
    },
}));

export default useStyles;