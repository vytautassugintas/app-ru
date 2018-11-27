import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Answer } from './views/Answer'
import { Congratulations } from './views/Congratulations'
import { CorrectAnswer } from './views/CorrectAnswer'
import { Home } from './views/Home'
import { Hints } from './views/Hints'

const App = () => (
  <Router>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/uzduotis/:id" component={Answer} />
      <Route path="/teisingai/:id" component={CorrectAnswer} />
      <Route path="/uzuominos" component={Hints} />
      <Route path="/sveikiname" component={Congratulations} />
    </div>
  </Router>
)

export default App
