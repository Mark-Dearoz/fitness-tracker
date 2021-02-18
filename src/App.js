
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignIn from './components/SignIn'
import './styles/style.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={SignIn}/>
        </Switch>
      </div>
    </Router>
 
  );
}

export default App;
