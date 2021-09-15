import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      // margin: theme.spacing(1),
    },
  },
  orangeIcon: {
    color: '#FFB565',
    marginTop: '20px'
},
}));

export default function ImageAvatars(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} type = {props.type}>
 {props.type === "nav" ? (
  <>
<Avatar alt="Remy Sharp" src="https://res.cloudinary.com/dhexix4cn/image/upload/v1631430944/itracker/avatar_yvmom4.jpg" />
<KeyboardArrowDownIcon className={classes.orangeIcon}/>
</>
) : ( 
  <div >
<Avatar alt="Remy Sharp" src="https://res.cloudinary.com/dhexix4cn/image/upload/v1631430944/itracker/avatar_yvmom4.jpg" />
 <Typography 
 style={{ color: 'black' }}>
 {props.username}
 </Typography>
 <Typography
  style={{ color: '#3565BA' }}>
 {props.quantity}
 </Typography>
</div>
)}
</div>
  )
}

