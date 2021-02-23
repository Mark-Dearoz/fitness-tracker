
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignIn from './components/SignIn'
import WorkoutTracker from './components/workoutTracker/WorkoutTracker'
import './styles/style.css'



const App = () => {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={SignIn}/>
          <Route path='/user' component={WorkoutTracker}/>
        </Switch>
      </div>
    </Router>
 
  );
}

export default App;
