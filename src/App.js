import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import NewMint from './pages/NewMint';
import ViewMint from './pages/ViewMint';
import SignUp from './pages/Signup';
import SignIn from './pages/Signin';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
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
  );
}

export default App;
