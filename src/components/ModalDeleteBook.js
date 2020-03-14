import React, { Component, Fragment } from "react";
import { Button, Header, Icon, Modal, Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { requestLogout } from "../public/redux/action/auth";
import { deleteBooks, requestBooks } from "../public/redux/action/books";

class ModalDeleteBooks extends Component {
  state = { open: false };

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true });
  };

  close = () => this.setState({ open: false });
  closeWithDelete = () => {
    const { dispatch, book_id } = this.props;
    dispatch(deleteBooks(book_id)).then(() => {
      dispatch(requestBooks());
    });
    this.setState({ open: false });
  };
  render() {
    const { open, closeOnEscape, closeOnDimmerClick } = this.state;
    return (
      <Fragment>
        <Button onClick={this.closeConfigShow(false, true)} color="red">
          Delete Book
        </Button>
        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
        >
          <Modal.Header>Delete This Book</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete This Book?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.close} negative>
              No
            </Button>
            <Button
              onClick={this.closeWithDelete}
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
export default connect(mapStateToProps)(ModalDeleteBooks);
