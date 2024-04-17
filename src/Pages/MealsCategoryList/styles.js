import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    title: {
        padding: '0px 40px'
    },
    categoryContainer: {
        gap: '25px', 
        paddingLeft: '40px', 
        marginTop: '20px',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '0 !important'
        }
    }
}));

export default useStyles;