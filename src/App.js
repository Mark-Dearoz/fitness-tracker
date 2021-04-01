
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LoginPage from './components/loginPage/LoginPage'
import Dashboard from './components/dashboard/Dashboard'
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import {grey} from '@material-ui/core/colors'
import './styles/style.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900]
    },
    type: 'dark'
  }
})

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' exact component={LoginPage}/>
            <Route path='/dashboard' component={Dashboard}/>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
