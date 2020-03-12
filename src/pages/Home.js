import React, { Component, Fragment } from "react";

import {
  Button,
  Checkbox,
  Form,
  Segment,
  Grid,
  Container
} from "semantic-ui-react";
import { connect } from "react-redux";
import { requestLogout } from "../public/redux/action/auth";
import NavbarNavigation from "../components/NavbarNavigation";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <NavbarNavigation {...this.props} />
        <Container>
          <p>ini Home</p>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default connect(mapStateToProps)(Home);
