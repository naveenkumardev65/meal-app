import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({

    imgContainer: {
        height: '300px',
        width: '100%',
        objectFit: 'cover',
        border: '1px solid #dbd4d4',
        boxShadow: '7px 7px 6px #f1f3f4',
        borderRadius: '8px'
    },
    btnContainer: {
        paddingTop: '10px'
    },
    button: {
        color: '#fff !important'
    },
    content: {
        paddingLeft: '20px',
        [theme.breakpoints.down('md')]: {
            paddingLeft: '0 !important',
            marginTop: '20px !important'
        }
    },
    title: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.8rem !important'
        }
    },
}));

export default useStyles;