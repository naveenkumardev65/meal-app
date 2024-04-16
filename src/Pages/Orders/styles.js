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
    orderContainer: {
        border: '1px solid #dbd4d4',
        boxShadow: '7px 7px 6px #f1f3f4',
        marginBottom: '50px',
        padding: '20px'
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
    },
    img: {
        height: '100%',
        width: '100%'
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