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
  Select,
} from "semantic-ui-react";
import { addMember, requestMembers } from "../public/redux/action/member";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
];

const ModalUpdateMember = (props) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(props.member.member_name);
  const [address, setAddress] = useState(props.member.member_address);
  const [gender, setGender] = useState(props.member.member_gender);
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
  console.log(name);

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
          Update Member
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
        <Modal.Header>Update Member Data</Modal.Header>
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
              value={name}
            />
          </Form.Field>
          <Form.Field error={errorInput.address}>
            <label>Address</label>
            <Input
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              placeholder="Address"
              value={address}
            />
          </Form.Field>
          <Form.Field>
            <label>Gender</label>
            <Select
              error={errorInput.gender}
              fluid
              label="Gender"
              options={options}
              placeholder="Gender"
              onChange={(e, { value }) => {
                setGender(value);
              }}
              value={gender}
            ></Select>
          </Form.Field>
          {/* <Form.Select
            control={
              <Select
                error={errorInput.gender}
                fluid
                label="Gender"
                options={options}
                placeholder="Gender"
                onChange={(e, { value }) => {
                  setGender(value);
                }}
                value={gender}
              ></Select>
            }
          /> */}
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

export default ModalUpdateMember;
