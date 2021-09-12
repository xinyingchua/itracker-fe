import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      color: '#2D4C8F',
      width: '350px'
    },
  },
}));

export default function Buttons(props) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Button variant={props.variant} color={props.color} children = {props.children}>
          
        </Button>

        </div>
  );
}