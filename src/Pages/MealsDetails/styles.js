import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    title: {
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.8rem !important'
        }
    }
}));

export default useStyles;