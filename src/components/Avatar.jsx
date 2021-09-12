import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orangeIcon: {
    color: '#FFB565',
    marginTop: '20px'
},
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/dhexix4cn/image/upload/v1631430944/itracker/avatar_yvmom4.jpg" />
      <KeyboardArrowDownIcon className={classes.orangeIcon}/>
    </div>
  );
}