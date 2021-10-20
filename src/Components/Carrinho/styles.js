import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    title: {
        marginTop: '5%'
    },
    limparButton: {
        minWidth: '150px',
        [theme.breakpoints.down('xs')]: {
            marginBottom: '5px'
        },
        [theme.breakpoints.up('xs')]: {
            marginRight: '20px'
        },
    },
    finalizarButton: {
        minWidth: '150px'
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '10%',
        width: '100%',
    }
}));

export default useStyles;
