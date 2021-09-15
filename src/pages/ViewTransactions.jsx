import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import TransactionTable from '../components/PastTransactionsTable'
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',
      },
      container: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        
      },  

      introHello: {
        fontSize: 30,

      },
      mainPageTitle: {
        textAlign: 'left',

      },
  }));

export default function ViewTransaction(props) {
    const classes = useStyles();

    return(
        <div className={classes.root}>
       <Grid container>
          <Grid item xs={12} className={classes.mainPageTitle} >
            <Typography className={classes.introHello}>
                View Transactions
            </Typography>
          </Grid>

          <Grid container style={{marginTop: '6%'}}> 

            <Grid item xs={12} direction="row"> 
              <Box display="flex" flexDirection ="row" flexWrap ="wrap">

              <TransactionTable/>
              </Box>
            </Grid>


          </Grid>

  

        </Grid>
      </div>
 

        
    )

}
