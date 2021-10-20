import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    root: {
        maxWidth: '100%'
    },
    media: {
        height: 0,
        paddingTop: '56.25% '
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        textOverflow: 'ellipsis'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
}));

export default useStyles;
