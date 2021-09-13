import SmallCard from '../components/SmallCard'
import StarProductCard from '../components/StarProductCard'
import LeaderBoard from '../components/Leaderboard'
import React from 'react';
import clsx from 'clsx'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import TransactionProductCard from '../components/TransactionProductCard'
import Box from '@material-ui/core/Box'



import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({

    root: {
        // display: 'flex',
      },
      container: {
        // paddingTop: theme.spacing(1),
        // paddingBottom: theme.spacing(1),
        
      },  
    fixedHeight: {
        height: 400,
      },
    card: {
      textAlign: 'left',
      },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: 0
      },

      introHello: {
        fontSize: 30,

      },
      mainPageTitle: {
        textAlign: 'left',

      },
  }));

export default function Dashboard(props) {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

    return(
        <div className={classes.root}>
       <Grid container>
          <Grid item xs={12} className={classes.mainPageTitle} >
          <Typography className={classes.introHello}>
              Create New Transaction 
          </Typography>
          </Grid>

          <Grid
            item
            xs={2}
            // md={11}
            // lg={12}
            style={{margin: '10px',}}
          >
            <div style={{display:'flex'}}>
            <TransactionProductCard className = {classes.card} title="Abeille Royale Oil" image='https://res.cloudinary.com/dhexix4cn/image/upload/v1631428034/itracker/3346470616172_S_qrvns8.png'/>
            <TransactionProductCard className = {classes.card} title="Abeille Royale Oil" image='https://res.cloudinary.com/dhexix4cn/image/upload/v1631428034/itracker/3346470616172_S_qrvns8.png'/>
            </div>
          </Grid>

        </Grid>
      </div>
 

        
    )

}
