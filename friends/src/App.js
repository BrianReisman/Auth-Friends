import "./App.css";

import { Route, NavLink } from "react-router-dom";
import Login from "./components/Login";
import {PrivateRoute} from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav style={{display: 'flex'}}>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </nav>

        <PrivateRoute path='/' component={FriendsList}/>
        <Route path="/login" component={Login} />
      </header>
    </div>
  );
}

export default App;
