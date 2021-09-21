import SmallCard from '../components/SmallCard'
import StarProductCard from '../components/StarProductCard'
import LeaderBoard from '../components/Leaderboard'
import React, { useState, useEffect } from "react";
import clsx from 'clsx'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
import { useCookies } from 'react-cookie'



const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',
      },
      container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      },
    avatar: {
      display: 'flex',
      justifyContent: 'flex-end'
    },      
    fixedHeight: {
        height: 400,
      },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },

      mainPageTitle: {
        padding: theme.spacing(2),
        textAlign: 'left',
        background: 'none',
        fontSize: 30,
      },
      date: {
        padding: theme.spacing(2),
        textAlign: 'left',
        background: 'none',
        fontSize: 20,
        color: '#3565BA',
      },
  }));



export default function Dashboard(props) {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

    const [starProductsTarget, setStarProductsTarget] = React.useState([])
    const [transactionQuantity, setTransactionQuantity] = React.useState([])
    const [targetQuantityDisplay, setTargetQuantityDisplay] = React.useState('')
    const [salesQuantityDisplay, setSalesQuantityDisplay] = React.useState('')
    const [cookies] = useCookies(['auth_token'])


    // MAKING MULTIPLE AXIOS GET
    let URL1 = 'http://localhost:4000/products';
    let URL2 = 'http://localhost:4000/transactions';
    
    const fetchAPI = (url) => axios.get(url, {headers: cookies});
    
    const promiseArray = [URL1, URL2].map(fetchAPI);
    

    useEffect(() => {
      // fetchAPI()
      Promise.all(promiseArray)
    .then((data) => {
      setStarProductsTarget(data[0])
      setTransactionQuantity(data[1])

      const targetQuantity = starProductsTarget.data.reduce(function(prev, cur) {
        return prev + cur.target
      },0)
      setTargetQuantityDisplay(targetQuantity)

      const salesQuantity = transactionQuantity.data.reduce(function(prev, cur) {
        return prev + cur.qty
      },0)
      setSalesQuantityDisplay(salesQuantity)
    })
    .catch((err) => {
      return(err)
    });
      },[])


    return(
        <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.mainPageTitle} >
    
            Hi Sylvia,
          </Grid>
          <Grid item xs={12} className={classes.date} >
           25 September 2021, Saturday
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper
            className={fixedHeightPaper}>
            <LeaderBoard/>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} >

            <Grid container xs={12} sm={12} >
                    <Grid item xs={6} sm={6}>
                        <Paper className={classes.paper} style={{marginRight: "5px"}} >
                        <SmallCard title="Your Sales Quantity" quantity={targetQuantityDisplay}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <Paper className={classes.paper}>
                        <SmallCard title="Your Sales Target" quantity={salesQuantityDisplay}/>
                        </Paper>
                    </Grid>
                </Grid>

            <Grid item xs={12} sm={12}>
                <Paper className={classes.paper} style={{ height: "300px", marginTop: "10px"}} >
                    <StarProductCard/>
                </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
 

        
    )

}
