import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import TransactionProductCard from '../components/TransactionProductCard'
import NewTransactionPaper from '../components/NewTransactionPaper'
import Box from '@material-ui/core/Box';
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { toast } from 'material-react-toastify'

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
    const [enterTransaction, setEnterTransaction] = React.useState([])
    const [apiStatus, setApiStatus] = React.useState('')
    const [starProducts, setStarProducts] = React.useState([])
    const [cookies] = useCookies(['auth_token'])
    let history = useHistory()

    // const notify = (message) => toast.dark(message)

    // CREATE TRANSACTION TO DB
    let createTransaction = async (e) => {
      try{
        let response = await axios({
          method: 'post',
          headers: cookies,
          url: 'http://localhost:4000/transactions',
          data: 
            transactionItems
          ,
        })
      history.push('/transactions')
      return
      }
      catch(err){
        // return notify('Not sucessful')
        console.log(err)
      }
    }
    
    // GET STAR PRODUCTS FROM DB
    const fetchAPI = async (api) => {
      let response = null
  
      try {
        response = await axios.get('http://localhost:4000/products', { headers: cookies })
        setStarProducts(response.data)
      } catch (err) {
        return err
      }
  
      return response.data
    }
  
    console.log(starProducts) 

    // transaction paper to render based on clicked item
    useEffect (() => {
      console.log("see", {transactionItems})
    },[transactionItems])

    useEffect(() => {
      fetchAPI()
      },[])
    

    return(
        <div className={classes.root}>
       <Grid container>
          <Grid item xs={12} className={classes.mainPageTitle} >
            <Typography className={classes.introHello}>
                Create New Transaction 
            </Typography>
          </Grid>

          <Grid container style={{width: '100%'}}> 

            <Grid item xs={8}> 
              <Box display="flex" flexDirection ="row" flexWrap ="wrap">
              {starProducts.map((item, index) => (
                    <TransactionProductCard className = {classes.card}
                    image={item.image}
                    desc ={item.desc} qty={1} unit={1} price={item.price}
                    transactionItems = {transactionItems}
                    setTransactionItems = {setTransactionItems}
                    />                
              ))}
              </Box>
            </Grid>

            <Grid item xs={4}> 
            {/* Receipts */}
            <NewTransactionPaper
            transactionItems = {transactionItems}
            setTransactionItems = {setTransactionItems}
            setEnterTransaction = {setEnterTransaction}
            createTransaction = {createTransaction}
            />

            </Grid>
          </Grid>

  

        </Grid>
      </div>
 

        
    )

}
