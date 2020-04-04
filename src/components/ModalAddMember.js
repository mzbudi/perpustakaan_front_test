import React, { useState, useEffect, Fragment } from "react";
import {
  Button,
  Checkbox,
  Form,
  Header,
  Image,
  Modal,
  Message,
  Input,
} from "semantic-ui-react";
import { addMember, requestMembers } from "../public/redux/action/member";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
];

const ModalAddMember = (props) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [messageOpen, setMessageOpen] = useState(false);
  const [messageProp, setMessageProp] = useState({
    header: "",
    content: "",
    color: "",
  });
  const [errorInput, setErrorInput] = useState({
    name: false,
    address: false,
    gender: false,
  });

  const dispatch = useDispatch();

  const inputMember = () => {
    console.log(name, address, gender);
    if (name && address && gender) {
      const body = {
        member_name: name,
        member_address: address,
        member_gender: gender,
      };
      axios.post(`${process.env.REACT_APP_API_HOST}/member`, body).then(() => {
        dispatch(requestMembers());
        setOpen(false);
      });
    } else {
      let obj = {};
      const errList = ["name", "address", "gender"];
      const errArr = [name, address, gender].map((i) => {
        if (!i) {
          obj = { ...obj, [errList[i]]: false };
          return i;
        }
      });
      console.log(obj);
      if (!name) {
        setErrorInput({ ...errorInput, name: true });
      }
      if (!address) {
        setErrorInput({ ...errorInput, address: true });
      }
      if (!gender) {
        setErrorInput({ ...errorInput, gender: true });
      }
    }
    // const config={
    //   body:{
    //     member_name : name,
    //     member_address : address,
    //     member_gender : gender
    //   }
    // }
    // axios.post(`http://127.0.0.1:3001/member/`,config)
    // setMessageOpen(true);
  };

  return (
    <Modal
      open={open}
      trigger={
        <Button
          onClick={() => {
            setOpen(true);
          }}
          color="blue"
        >
          Add Member
        </Button>
      }
    >
      {messageOpen ? (
        <Message
          header={"headd"}
          negative
          content={"asdf"}
          floating
          attached="top"
          onDismiss={() => {
            setMessageOpen(false);
          }}
        />
      ) : (
        <Modal.Header>Insert Member Data</Modal.Header>
      )}

      <Modal.Content>
        <Form>
          <Form.Field error={errorInput.name}>
            <label>Name</label>
            <Input
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="First Name"
            />
          </Form.Field>
          <Form.Field error={errorInput.address}>
            <label>Address</label>
            <Input
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              placeholder="Address"
            />
          </Form.Field>
          <Form.Select
            error={errorInput.gender}
            fluid
            label="Gender"
            options={options}
            placeholder="Gender"
            onChange={(e, { value }) => {
              setGender(value);
            }}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button
          onClick={() => {
            setOpen(false);
          }}
          negative
        >
          No
        </Button>
        <Button
          onClick={() => {
            inputMember();
          }}
          positive
          labelPosition="right"
          icon="checkmark"
          content="Yes"
        />
      </Modal.Actions>
    </Modal>
  );
};

export default ModalAddMember;
