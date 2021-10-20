import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    media: {
        height: 250
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    actions: {
        justifyContent: 'space-between'
    },
    buttons: {
        display: 'flex',
        alignItems: 'center'
    }
}));

export default useStyles;
