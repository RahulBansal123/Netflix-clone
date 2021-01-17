import React, { Component } from 'react';
import mainPage from './pages/mainPage';
import SignInLayout from './components/layout/signinpage/layout';
import { Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/in/login" exact component={SignInLayout} />;
        <Route path="/" exact component={mainPage} />
      </React.Fragment>
    );
  }
}

export default App;
