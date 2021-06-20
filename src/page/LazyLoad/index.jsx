import React, {lazy, Suspense} from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

// import Home from '../Home'
// import About from '../About'
import Loading from '../../components/Loading'
import './index.css'

const Home = lazy(() => import('../Home'))
const About = lazy(() => import('../About'))


export default function LazyLoad() {
    return (
      <div className="app-container">
        <div className="main-content">
          <div className="nav-list">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
          <div className="show-container">
            <Suspense fallback={<Loading/>}>
              <Switch>
                <Route path='/home' component={Home} />
                <Route path='/about' component={About} />
              </Switch>
            </Suspense>
          </div>
        </div>
      </div>
    )
}
