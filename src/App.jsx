import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import { ToastContainer } from 'material-react-toastify'
import 'material-react-toastify/dist/ReactToastify.css'
import { instanceOf } from 'prop-types'
import { withCookies, Cookies } from 'react-cookie'
import { CookiesProvider } from 'react-cookie'
import NavBar from './components/NavBar';
import Dashboard from '../src/pages/Dashboard'
import NewTransaction from '../src/pages/NewTransaction'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AllTransactions from './pages/ViewTransactions';
import UserUpdate from './pages/UserUpdate';

const theme = createTheme({
  typography: {
    fontFamily: ['Lexend', 'sans-serif'].join(','),
    h1: {
      fontWeight: 700,
    },
  },
  palette: {
    primary: {
      main: '#3565BA',
    },
    secondary: {
      main: '#FFB565',
    },
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
})

class App extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  }
  render() {
  return (
    <CookiesProvider>
      <ToastContainer
          position='bottom-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
        />
      <ThemeProvider theme={theme}>
      <Router>

      <Switch>
        <Route path='/login' exact component={LoginPage} />
        <Route path='/register' exact component={RegisterPage} />

        <React.Fragment>
        <NavBar>
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/transactions/new' component={NewTransaction} />
          <Route path='/transactions' exact component={AllTransactions} />
          <Route path='/user/update' component={UserUpdate} />

         </NavBar>
         </React.Fragment>
      </Switch>


      </Router>

      </ThemeProvider>
      </CookiesProvider>
  );
}
}

export default withCookies(App);
