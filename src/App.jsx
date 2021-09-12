import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import NavBar from './components/NavBar';

const theme = createTheme({

  link: {
    textDecoration: 'none',
    color: '#fff',
  },
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Router>
        <Switch>
        <Route path='/' component={NavBar} />


        </Switch>
  
      </Router>
      </ThemeProvider>

    </div>
  );
}

export default App;
