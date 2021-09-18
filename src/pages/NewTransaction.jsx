import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import TransactionProductCard from '../components/TransactionProductCard'
import NewTransactionPaper from '../components/NewTransactionPaper'
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({

  
    root: {
        display: 'flex',
      },
      container: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        
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

export default function NewTransaction(props) {
    const classes = useStyles();

    const [transactionItems, setTransactionItems] = React.useState([])

    // create state for transaction array (clickeditem)
    // [] --> product id 
    // transaction paper to render based on clicked item
    useEffect (() => {
      console.log("see", {transactionItems})
    },[transactionItems])

    return(
        <div className={classes.root}>
       <Grid container>
          <Grid item xs={12} className={classes.mainPageTitle} >
            <Typography className={classes.introHello}>
                Create New Transaction 
            </Typography>
          </Grid>

          <Grid container style={{width: '100%'}}> 

            <Grid item xs={8} direction="row"> 
              <Box display="flex" flexDirection ="row" flexWrap ="wrap">

                    <TransactionProductCard className = {classes.card}
                    title="Abeille Royale Oil"
                    image='https://res.cloudinary.com/dhexix4cn/image/upload/v1631428034/itracker/3346470616172_S_qrvns8.png' 
                    desc ="Abeille Royale Oil" qty='1' unit="1" price="100"
                    transactionItems = {transactionItems}
                    setTransactionItems = {setTransactionItems}
                    />                
        
              </Box>
            </Grid>

            <Grid item xs={4}> 
            {/* Receipts */}
            <NewTransactionPaper
            transactionItems = {transactionItems}
            setTransactionItems = {setTransactionItems}
            />

            </Grid>
          </Grid>

  

        </Grid>
      </div>
 

        
    )

}
