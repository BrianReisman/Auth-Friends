import { Route, Switch, Link } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import Friends from "./components/Friends";
import Form from './components/Form';

import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to='/'>login   </Link>
          <Link to='/friends'>Friends</Link>
          <Link to='/form'>Form</Link>
        </nav>
        <Switch>
          <Route path='/' exact component={Login} />
          <PrivateRoute path='/friends' component={Friends} />
          <PrivateRoute path='/form' component={Form} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
