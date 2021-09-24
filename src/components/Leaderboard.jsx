import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ImageAvatars from '../components/Avatar'
import LeaderboardList from '../components/LeaderboardList'
import { useCookies } from 'react-cookie';

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

export default function ComplexGrid(props) {
  const classes = useStyles();
  const leaderData = props.leaderboard.data
  console.log("see",leaderData)


  return (
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <Typography
              style={{ color: '#3565BA', textAlign:"left", fontStyle:"italic", fontSize:'10px' }}
              gutterBottom variant="subtitle2"> 
                LEADERBOARD 
                </Typography>
                <Typography 
                style={{ color: '#3565BA' }}
                gutterBottom variant="subtitle1">
                Most Sales Quantity
                </Typography>                
                
                {leaderData === undefined
                ? 
                (
                  <>
                <ImageAvatars className={classes.image}
                    username= "Sylvia"
                    imageSource="https://res.cloudinary.com/dhexix4cn/image/upload/v1631430944/itracker/avatar_yvmom4.jpg"
                    quantity="100" >
                    <img className={classes.img} 
                    alt="complex" 
                    type="leader"
                     />
                  </ImageAvatars>


                <LeaderboardList rank="2nd" name="Dan" quantity="90" imageSource="https://res.cloudinary.com/dhexix4cn/image/upload/v1632127636/itracker/qcsd8kzsl1pgfsuram7r.jpg"/>
                 <LeaderboardList rank="3rd" name="Jessica" quantity="87" imageSource="https://res.cloudinary.com/dhexix4cn/image/upload/v1632127671/itracker/vf2bahntts6vqyypqpng.jpg"/>
                 <LeaderboardList rank="4th" name="Rachel" quantity="80" imageSource="https://res.cloudinary.com/dhexix4cn/image/upload/v1632463342/itracker/images_z3dlej.jpg"/>

                  </>
                ) 
                : 
                (
                  <>
                    <ImageAvatars className={classes.image}
                    username= {leaderData[0].firstName}
                    quantity={leaderData[0].sales}
                    imageSource={leaderData[0].image}
                     >
                    <img className={classes.img} 
                    alt="complex" />
                  </ImageAvatars>

                 <LeaderboardList rank="2nd" name={leaderData[1].firstName} quantity={leaderData[1].sales} imageSource={leaderData[1].image}/>
                 <LeaderboardList rank="3rd" name={leaderData[2].firstName} quantity={leaderData[2].sales} imageSource={leaderData[2].image}/>
                 <LeaderboardList rank="4th" name={leaderData[3].firstName} quantity={leaderData[3].sales} imageSource={leaderData[3].image}/>
                  </>

                ) 
                }


              </Grid>

            </Grid>
   
          </Grid>
        </Grid>
  );
}