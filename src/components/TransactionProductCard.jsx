import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'


import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import EditIcon from '@material-ui/icons/Edit'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'

import { Link } from 'react-router-dom'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'



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

    // submit form function
    const handleFormSummit = (e) => {
      e.preventDefault()
      // history.push('/to-do')
    }
  
  return (
    <Grid container>
    <Grid item key={props} xs={12} sm={4} lg={3}>
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
                    className={classes.button}
                    // onClick={deleteToDoData}
                    // startIcon={<CheckCircleOutlineIcon />}
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
  </Grid>
  </Grid>

  );
}