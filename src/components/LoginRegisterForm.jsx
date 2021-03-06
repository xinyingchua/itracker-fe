import React from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { Link } from 'react-router-dom'
import { toast } from 'material-react-toastify'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#7865E5',
  },
  logo: {
    maxWidth: 140,
    // margin: theme.spacing(-3, 12, 10, 0),
    margin: "20px auto",

  },
}))

export default function LoginRegister(props) {
  const classes = useStyles()

  const notify = (message) => toast.dark(message)

  // useState Hooks

  const [emailLogin, setEmailLogin] = React.useState('')
  const [passwordLogin, setPasswordLogin] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  
  // COOKIES & HISTORY
  const [cookie, setCookie] = useCookies(['auth_token'])
  let history = useHistory()

  // API POSTS

  let fetchAPIData = async (response) => {
    try {
      if(props.type === "login") {
        response = await axios({
          method: 'post',
          url: 'http://localhost:4000/users/login',
          data: {
            email: emailLogin,
            password: passwordLogin,
          },
        })
      } else if(props.type === "register") {
        response = await axios({
          method: 'post',
          url: 'http://localhost:4000/users/register',
          data: {
            email: emailLogin,
            firstName: firstName,
            lastName: lastName,
            password: passwordLogin,
            confirmPassword: confirmPassword,
          },
        })
      }

    } catch (err) {
      return err
    }

    return response
  }

  // submit form function
  const handleFormSubmission = async (e) => { 
    e.preventDefault()

    let response = await fetchAPIData()

    if(props.type ==="login") {
      if (!response.data) {
        notify('Email or password is incorrect. Please try again.')
        return
      }
      setCookie('auth_token', response.data.token)
       history.push('/dashboard')
       console.log(response)
      return
    }
    else if(props.type ==="register") {
      if(response.status !== 201) {
        return notify("Please check your inputs.")
      }
      history.push('/login')
    }

  }

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img
            src='https://res.cloudinary.com/dhexix4cn/image/upload/v1631428025/itracker/Multi-Logo-white-bg_gorcqp.png'
            alt='logo'
            className={classes.logo}
          />
          <Typography style={{ fontWeight: '700' }} variant='h4' align='left'>
           {props.title}
          </Typography>
          
       
          <form
            className={classes.form}
            noValidate
            onSubmit={(e) => {
              handleFormSubmission(e)
            }}
          >
          {props.type === "login" 
          ?
          ( <>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              onChange={(e) => {
                setEmailLogin(e.target.value)
              }}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              onChange={(e) => setPasswordLogin(e.target.value)}
            />
            </>
            )
            :
            (
                <>
                <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
                onChange={(e) => {
                    setEmailLogin(e.target.value)
                }}
                />
                <TextField
                variant='outlined'
                margin='normal'
                required
                halfWidth
                style={{ width: '55%' }}
                id='firstName'
                label='First Name'
                name='firstName'
                autoComplete='firstName'
                autoFocus
                onChange={(e) => {
                    setFirstName(e.target.value)
                }}
                />
                <TextField
                variant='outlined'
                margin='normal'
                required
                halfWidth
                style={{ width: '43%', marginLeft: '6px'  }}
                id='lastName'
                label='Last Name'
                name='lastName'
                autoComplete='lastName'
                autoFocus
                onChange={(e) => {
                    setLastName(e.target.value)
                }}
                />
                <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                onChange={(e) => setPasswordLogin(e.target.value)}
                
                />
                <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='confirmPass'
                label='Confirm Password'
                type='password'
                id='confirmPassword'
                autoComplete='current-password'
                onChange={(e) => setConfirmPassword(e.target.value)}
                
                />
            </>
            )}


            <Button
            type='submit'
            fullWidth
            color="secondary"
            variant="contained"
            style={{ marginTop: '10px', color:'#3565BA' }}
            children={props.children}
            />
            {props.buttonTitle}

            <Grid container style={{ textAlign: 'center' }}>
              
            {props.type === "login" 
              ? 
              (<Grid item
                style={{ marginTop: '10px' }}
                >
                    New User?
                    <Link
                    to='/register'
                    style={{ textDecorationLine: 'underline', color: '#3565BA' }}
                    variant='body2'
                    >
                    {' Sign Up!'}
                    </Link>
              </Grid>)
              :
              
              (
                <Grid item
                style={{ marginTop: '10px' }}
                >
                    Already have an account? 
                    <Link
                    to='/login'
                    style={{ textDecorationLine: 'underline', color: '#3565BA' }}
                    variant='body2'
                    >
                    {'Login Here!'}
                    </Link>
              </Grid>
              )}


            </Grid>
          </form>
        </div>
      </Grid>
      {props.type === "login" 
      ?
      (
      <Grid item xs={false} sm={4} md={7} className={classes.image}style={{backgroundImage: "url(https://res.cloudinary.com/dhexix4cn/image/upload/v1631428034/itracker/site-cover-6-2000x1100_lnexdi.jpg)"}}/>
      )
      :
      (
      <Grid item xs={false} sm={4} md={7} className={classes.image}style={{backgroundImage: "url(https://res.cloudinary.com/dhexix4cn/image/upload/v1631428035/itracker/MAISON_GUERLAIN_LARGE_BANNER_1_trrpnr.jpg)"}}/>
      )
      }
    </Grid>
  )
}

