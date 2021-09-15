import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import { ToastContainer } from 'material-react-toastify'
import 'material-react-toastify/dist/ReactToastify.css'
import NavBar from './components/NavBar';
import Dashboard from '../src/pages/Dashboard'
import NewTransaction from '../src/pages/NewTransaction'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AllTransactions from './pages/ViewTransactions';

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

function App() {
  return (
    <div className="App">
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

        <div>
        <NavBar>
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/transactions/new' component={NewTransaction} />
          <Route path='/transactions' exact component={AllTransactions} />
          {/* <Route path='/register' component={} /> */}

         </NavBar>
         </div>
      </Switch>


      </Router>

      </ThemeProvider>

    </div>
  );
}

export default App;
