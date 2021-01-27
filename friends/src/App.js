import { Route, Switch, Link } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import Friends from "./components/Friends";
import Form from "./components/Form";
import EditFriend from './components/EditFriend';
import Friend from './components/Friend';
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">- login -</Link>
          <Link to="/friends">- Friends -</Link>
          <Link to="/form">- Add New Friend- </Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/form" component={Form} />
          <PrivateRoute exact path="/friends" component={Friends} />
          <PrivateRoute path="/friends/:id" component={Friend} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
