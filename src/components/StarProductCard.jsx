import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ReceiptIcon from '@material-ui/icons/Receipt';
import Grid from '@material-ui/core/Grid';
import Button from './Buttons'
import ProductImage from './ProductImage'


const useStyles = makeStyles({
  root: {
    width: 280,
    height: 100,
    padding: 0,
    margin: 0
  },
  title: {
    fontSize: 14,
    textAlign: 'left'
  },
  monthTitle:{
    textAlign: 'left'
  }
});

export default function StarProductCard(props) {
  const classes = useStyles();

  return (
    <Grid container spacing={1} style={{ marginTop: "12px"}}>

      <Grid item xs={3} sm={2} >
      <ReceiptIcon style={{ margin: "0px", height: "20px"}}/>
      </Grid>

      <Grid item xs={9} sm={10}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Star Products {props.title}
        </Typography>
        <Typography variant="h5" component="h4" className={classes.monthTitle} >
          August {props.quantity}
        </Typography>

        <Grid container xs={12}>
        <Grid item xs={3} style={{margin: '10px'}}>
        <ProductImage/>
        </Grid>
        <Grid item xs={3} style={{margin: '10px'}}>
        <ProductImage/>
        </Grid>
        <Grid item xs={3} style={{margin: '10px'}}>
        <ProductImage/>
        </Grid>
        </Grid>

        <Button color="secondary" variant="contained" children="Create New" style={{margin: '50px'}}/>
        </Grid>
    </Grid>
  );
}