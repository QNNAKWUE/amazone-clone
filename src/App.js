import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Checkout from './components/Checkout';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
  <Router>
    {/* <Header /> */}
    <div className='app'>
      <Switch>
        <Route exact path='/home'>
            <Header />
            <Home />
        </Route>
          
        <Route exact path='/login'>
            <Login />
        </Route>
          
        <Route exact path='/checkout'>
            <Header />
            <Checkout />
        </Route>
      </Switch>  
    </div>
  </Router>
  );
}

export default App;
