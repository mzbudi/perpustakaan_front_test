import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";
import { requestLogout } from "../public/redux/action/auth";

class NavbarNavigation extends Component {
  componentDidMount() {
    // const { auth, history } = this.props;
    // if (!auth.data.username) {
    //   history.push("/login");
    // }
  }

  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(requestLogout());
  };

  handleBookList = () => {
    this.props.history.push("/BookList");
  };
  handleMemberList = () => {
    this.props.history.push("/MemberList");
  };

  render() {
    return (
      <Menu>
        <Menu.Item
          name="editorials"
          // active={false}
          onClick={() => {
            this.handleBookList();
          }}
        >
          Book List
        </Menu.Item>

        <Menu.Item
          name="reviews"
          // active={false}
          onClick={() => {
            this.handleMemberList();
          }}
        >
          Member
        </Menu.Item>

        <Menu.Item
          name="logout"
          // active={false}
          onClick={() => {
            this.handleLogout();
          }}
        >
          Logout
        </Menu.Item>
      </Menu>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(NavbarNavigation);
