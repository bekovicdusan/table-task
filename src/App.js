import './App.css';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Home from './containers/Home/Home';
import About from './containers/About/About';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact render={Home}/>
          <Route path="/about" exact render={About}/>
        </Switch>
      </Router> 
    </>
  );
}

export default App;
