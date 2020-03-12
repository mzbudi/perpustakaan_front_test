import React, { Component, Fragment } from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { updateBook, requestBooks } from "../public/redux/action/books";

class ModalUpdateBook extends Component {
  state = {
    open: false,
    book_name: this.props.book.book_name,
    book_author: this.props.book.book_author
  };

  closeConfigShow = closeOnDimmerClick => () => {
    this.setState({ closeOnDimmerClick, open: true });
  };

  handleChange = (e, type) => {
    this.setState(
      {
        [type]: e.target.value
      },
      () => {
        console.log(this.state.book_name, this.state.book_author);
      }
    );
  };

  close = () => this.setState({ open: false });
  updateBook = () => {
    const { dispatch, book } = this.props;
    const { book_name, book_author } = this.state;
    const body = {
      book_name,
      book_author,
      book_status: "TERSEDIA"
    };
    dispatch(updateBook(body, book.book_id)).then(() => {
      dispatch(requestBooks());
    });
    this.setState({ open: false });
  };
  render() {
    const { open, closeOnDimmerClick } = this.state;
    const { book } = this.props;
    console.log(book);
    return (
      <Fragment>
        <Button onClick={this.closeConfigShow(true)} color="green">
          Update Book
        </Button>

        <Modal
          open={open}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
        >
          <Modal.Header>Update Book</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field>
                <label>Book Name</label>
                <input
                  defaultValue={book.book_name}
                  placeholder="Book Name"
                  onChange={e => {
                    this.handleChange(e, "book_name");
                  }}
                />
              </Form.Field>
              <Form.Field>
                <label>Book Author</label>
                <input
                  defaultValue={book.book_author}
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
              onClick={this.updateBook}
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
export default connect(mapStateToProps)(ModalUpdateBook);
