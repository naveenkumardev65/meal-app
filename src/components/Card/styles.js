import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    cardContainer: {
        cursor: 'pointer',
        transition: 'transform .2s',
        borderRadius: '17px',
        '&:hover': {
            transform: 'scale(1.1)'
        }
    },
    cartBtn: {
        borderRadius: '17px',
        color: '#fff',
        transition: 'transform .2s',
        '&:hover': {
            transform: 'scale(1.02)'
        }
    }
}));

export default useStyles;