import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ReceiptIcon from '@material-ui/icons/Receipt';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    width: 280,
    height: 200,
    padding: 0,
    margin: 0
  },
  title: {
    fontSize: 14,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Grid container>

      <Grid item xs={3} sm={3} >
      <ReceiptIcon style={{ margin: "0px"}}/>
      </Grid>
      
      <Grid item xs={9} sm={9}>
        <Typography className={classes.title} color="textSecondary">
          Sales Quantity {props.title}
        </Typography>
        <Typography variant="h5" component="h2">
          72 {props.quantity}
        </Typography>
        </Grid>
    </Grid>
  );
}