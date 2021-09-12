import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Avatar from './Avatar'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: '#F4F6F9',
    flexWrap: 'wrap',
    margin: '10px',
    borderRadius: '20px',
    '& > *': {
      margin: theme.spacing(2),
      width: theme.spacing(16),
      height: theme.spacing(4),
    },
  },
  // image:{
  //   marginBottom: '200px',
  // }
}));

export default function LeaderboardList(props) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Typography>
          {props.rank}
        </Typography>

        <Grid container>
        <Grid item xs ={6}>
        <Avatar />
        </Grid>
        <Grid item xs ={6}>
        <Typography>
        {props.name}
        </Typography>
        </Grid>
        </Grid>

        <Typography>
        {props.quantity}
        </Typography>
      </div>
    );
  }
