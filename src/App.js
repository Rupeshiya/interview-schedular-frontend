import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Landing from './components/layouts/Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Schedule from './components/Scheduler/Schedule';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
        <Header />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Switch>
              <Route exact path="/schedule" component={Schedule} />
              <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
      <Footer />
      </div>
      </Router>
    </Provider>
  );
}

export default App;
