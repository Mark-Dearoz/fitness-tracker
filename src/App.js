import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider as ThemeProvider2 } from 'react-jss'
import theme2 from './styles/theme'
import { grey } from '@material-ui/core/colors'
import './style.css'
import LandingPage from './pages/LandingPage'
import About from './pages/About'

const theme = createMuiTheme({
	palette: {
		primary: {
			main: grey[900],
		},
		type: 'dark',
	},
})

const App = () => {
	return (
		<ThemeProvider2 theme={theme2}>
			<ThemeProvider theme={theme}>
				<Router>
					<div className="App">
						<Switch>
							<Route path="/" exact component={LandingPage} />
							<Route path="/about" exact component={About} />
							<Route path="/login" exact component={LoginPage} />
							<Route path="/dashboard" component={Dashboard} />
						</Switch>
					</div>
				</Router>
			</ThemeProvider>
		</ThemeProvider2>
	)
}

export default App
