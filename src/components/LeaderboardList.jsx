import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Avatar from './Avatar'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: '#F4F6F9',
    flexWrap: 'none',
    margin: '10px',
    borderRadius: '20px',
    '& > *': {
      margin: theme.spacing(2),
      width: theme.spacing(16),
      height: theme.spacing(2),
    },
  },
}));

export default function LeaderboardList(props) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}
      style={{display: "flex", flexWrap:"none"}}>
        {/* <Grid container xs={12}> */}
        {/* <Box display="flex"> */}
          {/* <Grid item xs ={3}> */}
            <Typography style={{ color: '#3565BA' }}>
              {props.rank}
            </Typography>
           {/* </Grid> */}


            {/* <Grid item xs ={3}> */}
              <Avatar
              style={{margin:"0"}}/>
            {/* </Grid> */}
            {/* <Grid item xs ={3}> */}
              <Typography style={{ color: 'black' }}>
              {props.name}
              </Typography>
           {/* </Grid> */}

           {/* <Grid item xs ={3}> */}
            <Typography style={{ color: '#3565BA' }}>
            {props.quantity}
            </Typography>
          {/* </Grid> */}
          {/* </Box> */}
          {/* </Grid> */}
      </div>
    );
  }
