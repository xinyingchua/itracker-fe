import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ReceiptIcon from '@material-ui/icons/Receipt';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import clsx from 'clsx'

const useStyles = makeStyles({
  root: {
    width: 280,
    height: 200,
    padding: 0,
    margin: 0
  },
  title: {
    fontSize: 14,
    marginTop: '12px'
  },
  targetTitle: {
    fontSize: 12,
    margin: '10px',
  },
  photo: {
    maxWidth: 50,
    margin: '0px'
  },
  // paper: {
  //   // padding: theme.spacing(2),
  //   display: 'flex',
  //   overflow: 'auto',
  //   flexDirection: 'column',
  // },
  // fixedHeight: {
  //   height: 240,
  // },
});

export default function ProductImage(props) {
  const classes = useStyles();
  // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    // <Grid container >
      <Paper style={{width:'120px'}}>
      <Grid container>

      <Grid item xs={6} >

      <img
        src={props.image}
        alt='product'
        className={classes.photo}
        />
      </Grid>
      
      <Grid item xs={6}>
        <Typography className={classes.title} color="textSecondary">
          {props.title}
        </Typography>
        </Grid>
        <Typography className={classes.targetTitle} style={{marginLeft: '10px'}}> 
          Target: 42 / 50 {props.quantity}
        </Typography>
        </Grid>
        </Paper>
    // </Grid>
  );
}