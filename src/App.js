import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/Navbar';
import Calendar from './components/Calendar';

const NoMatchPage = () => {
  return (
    <div
      style={{ textAlign: 'center', minHeight: 'calc(100vh - 87px - 127px)' }}
    >
      <h3 style={{ paddingTop: '3rem' }}>404 - Not found</h3>
    </div>
  );
};

const App = () => {
  return (
  <Router>
    <NavBar />

    <div className='container'>
        <div className='row mt-5 hero-row-reverse-mobile home-row '>
          <div className='col-lg-6 text-center txt-md-left'>
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/Calendar' component={Calendar} />
      <Route component={NoMatchPage} />
    </Switch>
    </div>
    </div>
    </div>
  </Router>
  );
}

export default App;
