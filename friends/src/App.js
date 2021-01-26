import { Route, Switch, Link } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import Friends from "./components/Friends";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to='/'>login   </Link>
          <Link to='/friends'>Friends</Link>
        </nav>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/friends' component={Friends} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
