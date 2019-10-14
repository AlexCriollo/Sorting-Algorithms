import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: '15px'
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function DisplaySortedSet({ results}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {results.map(num =>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>{num.toFixed(4)}</Paper>
                    </Grid>
                    )} 
            </Grid>
        </div>
    );
}