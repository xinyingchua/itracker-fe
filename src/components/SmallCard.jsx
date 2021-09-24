import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PersonIcon from '@material-ui/icons/Person';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';

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

  // const tryQuantity = props.tryQuantity
  // const targetQuantityData = props.starProductsTarget.data


  // targetQuantityData.reduce(function())

      // const targetQuantity = props.starProductsTarget.data.reduce(function(prev, cur) {
      //   return prev + cur.target
      // },0)
      // setTargetQuantityDisplay(targetQuantity)

  // console.log("sales", salesQuantityData)
  // console.log("target", targetQuantityData)
  // console.log("try", tryQuantity)


  // function subtotal(items) {
  //   return items.map(({ target }) => target).reduce((sum, i) => sum + i, 0);
  // }
  // console.log(subtotal(targetQuantityData))

  return (
    <Grid container>

      {props.title=== "Your Sales Quantity"
      ?
      (
        <>
        <Grid item xs={3} sm={3} >
        <PersonIcon style={{ color: '#3565BA' }}/>
        </Grid>
        </>
      )
      :
      (
        <>
        <Grid item xs={3} sm={3} >
        <TrackChangesIcon style={{ color: '#3565BA' }}/>
        </Grid>
        </>
      )}


      
      <Grid item xs={9} sm={9}>
        <Typography className={classes.title} style={{ color: '#3565BA' }}>
          {props.title}
        </Typography>
        <Typography style={{ color: '#1B2559' }}
        variant="h5" component="h2">
          {props.quantity}
        </Typography>
        </Grid>
    </Grid>
  );
}