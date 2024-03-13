import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import ComingSoonSection from './components/ComingSoonSection'; 

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <ComingSoonSection />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
