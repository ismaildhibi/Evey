import { makeStyles } from '@material-ui/core/styles';

 const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
      },
      paper: {
        maxWidth: 1000,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
      },
    
      typography: {
        fontFamily: "arial",
        fontSize: '18px',
        lineHeight: '1.75',
        textAlign: "justify",
        color:"#6a7583",
        letterSpacing:"0.01071em"
       },
      
    }));
    export default useStyles;