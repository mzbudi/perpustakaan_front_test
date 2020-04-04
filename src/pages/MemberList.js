import React, { Component, Fragment } from "react";

import { Button, Container, Table, Search } from "semantic-ui-react";
import { connect } from "react-redux";
import NavbarNavigation from "../components/NavbarNavigation";
import ModalAddMember from "../components/ModalAddMember";
import { requestMembers } from "../public/redux/action/member";

class MemberList extends Component {
  state = {
    memberList: [],
    search: "",
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(requestMembers(this.state.search));
    // const config = {
    //   params: this.state.searchName,
    // };
    // axios.get("http://127.0.0.1:3001/member/", config).then(({ data }) => {
    //   this.setState({
    //     memberList: data.data,
    //   });
    // });
  }

  handleChangeSearch = (e) => {
    this.setState(
      {
        search: e.target.value,
      },
      () => {
        this.props.dispatch(requestMembers(this.state.search));
      }
    );
  };

  render() {
    const { member } = this.props;
    const { memberList } = this.state;
    console.log(member);
    return (
      <Fragment>
        <NavbarNavigation {...this.props} />
        <Container>
          <ModalAddMember />
          <Search
            // loading={}
            open={false}
            onSearchChange={(e) => {
              this.handleChangeSearch(e);
            }}
          />
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell singleLine textAlign="center">
                  Member Id
                </Table.HeaderCell>
                <Table.HeaderCell textAlign="center">
                  Member Name
                </Table.HeaderCell>
                <Table.HeaderCell textAlign="center">
                  Member Address
                </Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Gender</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {member.dataMember.length
                ? member.dataMember.map((item, index) => {
                    return (
                      <Table.Row>
                        <Table.Cell textAlign="center">
                          {item.id_member}
                        </Table.Cell>
                        <Table.Cell singleLine textAlign="center">
                          {item.member_name}
                        </Table.Cell>
                        <Table.Cell textAlign="center">
                          {item.member_address}
                        </Table.Cell>
                        <Table.Cell textAlign="center">
                          {item.member_gender}
                        </Table.Cell>
                        <Table.Cell textAlign="center">
                          <Button primary>Act 1</Button>
                          <Button secondary>Act 2</Button>
                        </Table.Cell>
                      </Table.Row>
                    );
                  })
                : null}
            </Table.Body>
          </Table>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    books: state.books,
    member: state.member,
  };
};
export default connect(mapStateToProps)(MemberList);
