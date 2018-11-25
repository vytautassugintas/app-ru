import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Answer } from './views/Answer';
import { Congratulations } from './views/Congratulations';
import { CorrectAnswer } from './views/CorrectAnswer';
import { Home } from './views/Home';
import { Hints } from './views/Hints';


const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const App = () => (
  <Router>
    <div>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </nav> */}
      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
      <Route path="/uzduotis/:id" component={Answer} />
      <Route path="/uzuominos" component={Hints} />
    </div>
  </Router>
);

export default App;