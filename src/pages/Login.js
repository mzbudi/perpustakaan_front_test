import React, { Component, Fragment } from "react";
import "../style.css";
import { connect } from "react-redux";
import {
  Button,
  Checkbox,
  Form,
  Segment,
  Grid,
  Container
} from "semantic-ui-react";
import { requestLogin } from "../public/redux/action/auth";
// import Book from "./Book";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  componentDidMount() {
    const { auth, history } = this.props;
    if (auth.data.username) {
      history.push("/");
    }
  }

  handleChange = (e, type) => {
    this.setState({
      [type]: e.target.value
    });
  };

  handleLogin = () => {
    const { dispatch, history } = this.props;
    const { username, password } = this.state;
    const body = {
      username,
      password
    };
    dispatch(requestLogin(body)).then(() => {
      history.push("/");
    });
  };

  render() {
    return (
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
          alignItems: "center"
        }}
      >
        <Segment color="red" className="segmentMid">
          <Form>
            <Form.Field>
              <label>Username</label>
              <input
                placeholder="username"
                onChange={e => {
                  this.handleChange(e, "username");
                }}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                type="password"
                placeholder="password"
                onChange={e => {
                  this.handleChange(e, "password");
                }}
              />
            </Form.Field>
            <Button onClick={this.handleLogin} type="submit">
              Login
            </Button>
          </Form>
        </Segment>
        {/* <Book /> */}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Login);
