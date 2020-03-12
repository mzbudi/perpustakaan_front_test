import React, { Component } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Button } from "semantic-ui-react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import NavbarNavigation from "./components/NavbarNavigation";

class App extends Component {
  render() {
    const { auth } = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={props => {
              return auth.data.username ? (
                <Home {...props} />
              ) : (
                <Redirect to="/login" />
              );
            }}
          />
          <Route path="/login" render={props => <Login {...props} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(App);
