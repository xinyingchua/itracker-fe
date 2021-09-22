import React from 'react'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ImageAvatars from '../components/Avatar'
import { Link } from 'react-router-dom'
import DashboardIcon from '@material-ui/icons/Dashboard'
import PeopleIcon from '@material-ui/icons/People'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import ToggleOnIcon from '@material-ui/icons/ToggleOn'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,

        }),
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: 36,
      },
      hide: {
        display: 'none',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
      },
      drawerOpen: {
        width: drawerWidth,
        background: '#3565BA',
        color: '#FFFFFF',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
    
        }),
      },
      drawerClose: {
        background: '#3565BA',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9) + 1,
        },
      },
      toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
    icon: {
        color: '#FFFFFF',
    },
    orangeIcon: {
        color: '#FFB565',
    },
    tool: {
        background: '#FFFFFF',
        display: 'flex',
        justifyContent: 'space-between',

    },
    logo: {
        maxWidth: 150,
        marginTop: '20px',
        marginBottom: '20px'
      },
    avatar: {
      display: 'flex',
      justifyContent: 'flex-end'
    },      

  }));

export default function NavBar(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
  
    const [cookie, removeCookie] = useCookies(['auth_token'])


    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    let history = useHistory()
    const handleRemoveCookie = (e) => {
      e.preventDefault()
      removeCookie('auth_token')
      history.push('/login')
    };
  
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
    
          <Toolbar className={classes.tool}>
          
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
             
              <MenuIcon className ={classes.orangeIcon}  />
   
            </IconButton>
            <Typography variant="h6" noWrap>
             
            </Typography>
           <ImageAvatars className ={classes.avatar} type = "nav"/>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <img
              src='https://res.cloudinary.com/dhexix4cn/image/upload/v1631428025/itracker/White-logo-name_rfcsan.png'
              alt='logo'
              className={classes.logo}
            />
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon className ={classes.orangeIcon}  /> : <ChevronLeftIcon className ={classes.icon} />}
            </IconButton>
          </div>
          <Divider />

          <Link to='/dashboard' style={{ textDecoration: 'none', color: '#fff' }}>
            <ListItem button>
              <ListItemIcon style={{ color: 'white' }}>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary='Dashboard' />
            </ListItem>
          </Link>

          <Link to='/transactions' style={{ textDecoration: 'none', color: '#fff' }}>
            <ListItem button>
              <ListItemIcon style={{ color: 'white' }}>
                <FormatListNumberedIcon />
              </ListItemIcon>
              <ListItemText primary='View All Transaction' />
            </ListItem>
          </Link>

          <Link to='/incentive' style={{ textDecoration: 'none', color: '#fff' }}>
            <ListItem button>
              <ListItemIcon style={{ color: 'white' }}>
                <MonetizationOnIcon />
              </ListItemIcon>
              <ListItemText primary='Incentive Scheme' />
            </ListItem>
          </Link>


          <Link to='/leaderboard' style={{ textDecoration: 'none', color: '#fff' }}>
            <ListItem button>
              <ListItemIcon style={{ color: 'white' }}>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary='Leaderboard' />
            </ListItem>
          </Link>

          <Divider />


      {/* <ListItem button> */}
      <ListItem
        button
        onClick={(e) => {
          handleRemoveCookie(e)
        }}
      >
        <ListItemIcon style={{ color: 'white' }}>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary='Log Out' />
      </ListItem>
 
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {props.children}
        
        </main>
      </div>
    );
}

