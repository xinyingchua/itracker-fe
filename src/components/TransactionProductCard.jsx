import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { Link } from 'react-router-dom'




const useStyles = makeStyles((theme) => ({

  photo: {
    maxWidth: '100px',
  },
  paper: {
    display: 'flex',
  },
  rootcard: {
    height: 230,
    width: 230,
    padding: theme.spacing(2),
    margin: '20px'
  },
}));

export default function TransactionProductCard(props) {
  const classes = useStyles();


  // const [cart, setCart] = React.useState([]);

  function addItemToCart(e) {
    // const item = e.target.title;
    const item = {
      desc: props.desc,
      price:  props.price,
      qty: props.qty,
      unit: props.unit
    }

    console.log(item);
    // setCart(cart => [...cart, item]);
    
    props.setTransactionItems([...props.transactionItems, item]) 
  }

    // submit form function
    const handleFormSummit = (e) => {
      e.preventDefault()
      
      // history.push('/to-do')
    }
  
  return (
    <Card className={classes.rootcard}>
      <CardContent>

        <img
        src={props.image}
        alt='product'
        className={classes.photo}
        />
    
        <Typography>
          {props.title}
        </Typography>
       
        <Grid container className={classes.button}>
 
          <Grid item style={{margin:'auto'}}>
            <CardActions>
              <Link
                to={{ state: { _id: props._id } }}
                style={{ textDecoration: 'none', color: '#fff' }}
              >
                <form
                  onSubmit={(e) => {
                    handleFormSummit(e)
                  }}
                >
                  <Button
                    variant='contained'
                    justify='right'
                    color='primary'
                    desc={props.desc}
                    qty={props.qty}
                    className={classes.button}
                    onClick={addItemToCart}
                  >
                    Add
                  </Button>
                </form>
              </Link>
            </CardActions>
          </Grid>
        </Grid>
      </CardContent>
    </Card>


  );
}