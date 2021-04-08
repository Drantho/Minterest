import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import User from './pages/User/User';
import NewMint from './pages/NewMint/NewMint';
import ViewMint from './pages/ViewMint/ViewMint';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Profile from './pages/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import React from 'react'

const App = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/User/:uid">
          <User />
        </Route>
        <Route exact path="/NewMint">
          <NewMint />
        </Route>
        <Route exact path="/ViewMint/:mintId">
          <ViewMint />
        </Route>
        <Route exact path="SignUp">
          <SignUp />
        </Route>
        <Route exact path="/SignIn">
          <SignIn />
        </Route>
        <Route exact path="/Profile">
          <Profile />
        </Route>
      </Switch>

      <Footer />
    </Router>
  )
}

export default App
