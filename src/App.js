import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'

import Container from './components/layout/Cointainer'

function App() {
  return (
    <Route>
      <ul>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/company'>Company</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/newproject'>NewProject</Link>
        </div>
        <Switch>
          <Container customClass='min-height'>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route exact path='/company'>
            </Route>
              <Company />
            <Route exact path='/contact'>
            </Route>
              <Contact />
            <Route exact path='/newproject'>
              <NewProject />
            </Route>
          </Container>
        </Switch>
      </ul>
      <p>Footer</p>
    </Route>
  )
}

export default App
