import React, { Component } from 'react';
import mainPage from './pages/mainPage';
import SignInLayout from './components/layout/signinpage/layout';
import { Redirect, Route, Switch } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/in/login" exact component={SignInLayout} />;
          <Route path="/" exact component={mainPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
