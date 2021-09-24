import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'

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
});

export default function ProductImage(props) {
  const classes = useStyles();
  
  return (
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
        <Typography className={classes.title} style={{ color: '#1B2559' }}>
          {props.title}
        </Typography>
        </Grid>
        <Typography className={classes.targetTitle} style={{marginLeft: '10px', color: "#1B2559"}}> 
          Target: {props.quantity} / {props.target}
        </Typography>
        </Grid>
        </Paper>
  );
}