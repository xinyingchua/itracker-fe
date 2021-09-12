import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import NavBar from './components/NavBar';
import Dashboard from '../src/pages/Dashboard'

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
      <ThemeProvider theme={theme}>
      <NavBar>

      <Router>
        <Switch>
        <Route path='/dashboard' component={Dashboard} />


        </Switch>
  
      </Router>
      </NavBar>
      </ThemeProvider>

    </div>
  );
}

export default App;
