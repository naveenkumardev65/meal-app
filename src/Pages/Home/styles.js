import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
        padding: '0px 40px',
        gap: '20px'
    },
    cardContainer: {
        height: '179px',
        maxHeight: '200px',
        width: '200px',
        border: '1px solid #dbd4d4',
        boxShadow: '7px 7px 6px #f1f3f4',
        transition: 'transform .2s',
        '&:hover': {
            transform: 'scale(1.1)'
        }
    },
    title: {
        paddingLeft: '40px'
    },
    categoryImage: {
        height: '80%'
    },
    categoryTitle: {
        fontWeight: '700 !important',
        padding: '5px',
    },
    horizontalLine: {
        border: '1px solid #ececec',
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
}));

export default useStyles;