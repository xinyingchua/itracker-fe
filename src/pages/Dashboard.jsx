import SmallCard from '../components/SmallCard'
import StarProductCard from '../components/StarProductCard'
import LeaderBoard from '../components/Leaderboard'
import React from 'react';
import clsx from 'clsx'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',
      },
      container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      },
    avatar: {
      display: 'flex',
      justifyContent: 'flex-end'
    },      
    fixedHeight: {
        height: 400,
      },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },

      mainPageTitle: {
        padding: theme.spacing(2),
        textAlign: 'left',
        background: 'none',
        fontSize: 30,
      },
      date: {
        padding: theme.spacing(2),
        textAlign: 'left',
        background: 'none',
        fontSize: 20,
        color: '#3565BA',
      },
  }));

export default function Dashboard(props) {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

    return(
        <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.mainPageTitle} >
    
            Hi Sylvia,
          </Grid>
          <Grid item xs={12} className={classes.date} >
           12 September 2021, Sunday
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper
            className={fixedHeightPaper}>
            <LeaderBoard/>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} >

            <Grid container xs={12} sm={12} >
                    <Grid item xs={6} sm={6}>
                        <Paper className={classes.paper} style={{marginRight: "5px"}}>
                        <SmallCard/>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <Paper className={classes.paper}>
                        <SmallCard/>
                        </Paper>
                    </Grid>
                </Grid>

            <Grid item xs={12} sm={12}>
                <Paper className={classes.paper} style={{ height: "300px", marginTop: "10px"}} >
                    <StarProductCard/>
                </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
 

        
    )

}
