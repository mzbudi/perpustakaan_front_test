import React, { Component, Fragment } from "react";

import { Button, Container, Table, Search, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import NavbarNavigation from "../components/NavbarNavigation";
import ModalDeleteBook from "../components/ModalDeleteBook";
import ModalAddBook from "../components/ModalAddBook";
import ModalUpdateBook from "../components/ModalUpdateBook";
import { requestBooks } from "../public/redux/action/books";

class BookList extends Component {
  state = {
    search: ""
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(requestBooks());
  }

  handleChangeSearch = e => {
    this.setState(
      {
        search: e.target.value
      },
      () => {
        this.props.dispatch(requestBooks(this.state.search));
      }
    );
  };

  render() {
    const { books } = this.props;
    return (
      <Fragment>
        <NavbarNavigation {...this.props} />
        <Container>
          <Grid columns={5}>
            <Grid.Row>
              <Grid.Column width={2}>
                <ModalAddBook />
              </Grid.Column>
              <Grid.Column>
                <Search
                  // loading={}
                  open={false}
                  onSearchChange={e => {
                    this.handleChangeSearch(e);
                  }}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell singleLine textAlign="center">
                  Book Id
                </Table.HeaderCell>
                <Table.HeaderCell textAlign="center">
                  Book Name
                </Table.HeaderCell>
                <Table.HeaderCell textAlign="center">
                  Book Author
                </Table.HeaderCell>
                <Table.HeaderCell textAlign="center">
                  Book Status
                </Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {books.data.length
                ? books.data.map(item => {
                    return (
                      <Table.Row>
                        <Table.Cell textAlign="center">
                          {item.book_id}
                        </Table.Cell>
                        <Table.Cell singleLine textAlign="center">
                          {item.book_name}
                        </Table.Cell>
                        <Table.Cell textAlign="center">
                          {item.book_author}
                        </Table.Cell>
                        <Table.Cell textAlign="center">
                          {item.book_status}
                        </Table.Cell>
                        <Table.Cell textAlign="center">
                          <ModalUpdateBook book={item} />
                          <ModalDeleteBook book_id={item.book_id} />
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

const mapStateToProps = state => {
  return {
    auth: state.auth,
    books: state.books
  };
};
export default connect(mapStateToProps)(BookList);
