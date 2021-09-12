import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ImageAvatars from '../components/Avatar'
import LeaderboardList from '../components/LeaderboardList'
// import StarsIcon from '@material-ui/icons/Stars';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    minWidth: 500,
    height: 2000,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    textAlign: 'center'
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <Typography gutterBottom variant="subtitle2">
                LEADERBOARD
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                Most Sales Quantity
                </Typography>
                <Grid item style ={{justifyContent: 'center'}}>
                  <ImageAvatars className={classes.image} username= "Emily" quantity="100" >
                    <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
                  </ImageAvatars>
                 </Grid>

                 <LeaderboardList rank="2nd" name="Dan" quantity="90"/>
                 <LeaderboardList rank="3rd" name="Jane" quantity="87"/>
                 <LeaderboardList rank="4th" name="Sylvia" quantity="80"/>

              </Grid>

            </Grid>
   
          </Grid>
        </Grid>
  );
}