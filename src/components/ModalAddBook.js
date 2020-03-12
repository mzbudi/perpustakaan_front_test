import React, { Component, Fragment } from "react";
import {
  Button,
  Header,
  Icon,
  Modal,
  Container,
  Form
} from "semantic-ui-react";
import { connect } from "react-redux";
// import { requestLogout } from "../public/redux/action/auth";
import { addBook, requestBooks } from "../public/redux/action/books";

class ModalAddBook extends Component {
  state = { open: false, book_name: "", book_author: "" };

  closeConfigShow = closeOnDimmerClick => () => {
    this.setState({ closeOnDimmerClick, open: true });
  };

  handleChange = (e, type) => {
    this.setState({
      [type]: e.target.value
    });
  };

  close = () => this.setState({ open: false });
  addBook = () => {
    const { dispatch } = this.props;
    const { book_name, book_author } = this.state;
    const body = {
      book_name,
      book_author
    };
    dispatch(addBook(body));
    dispatch(requestBooks());
    this.setState({ open: false });
  };
  render() {
    const { open, closeOnDimmerClick } = this.state;
    return (
      <Fragment>
        <Button onClick={this.closeConfigShow(true)} primary>
          Add Book
        </Button>

        <Modal
          open={open}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
        >
          <Modal.Header>Add Book</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field>
                <label>Book Name</label>
                <input
                  placeholder="Book Name"
                  onChange={e => {
                    this.handleChange(e, "book_name");
                  }}
                />
              </Form.Field>
              <Form.Field>
                <label>Book Author</label>
                <input
                  placeholder="Book Author"
                  onChange={e => {
                    this.handleChange(e, "book_author");
                  }}
                />
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.close} negative>
              No
            </Button>
            <Button
              onClick={this.addBook}
              positive
              labelPosition="right"
              icon="checkmark"
              content="Yes"
            />
          </Modal.Actions>
        </Modal>
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
export default connect(mapStateToProps)(ModalAddBook);
