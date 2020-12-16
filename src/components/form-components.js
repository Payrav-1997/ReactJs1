import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

const FormValue = ({ create, createHandler }) => {
  
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [brithDate, setBrithDate] = useState("");
  
  const changeIdHandler = (newId) => {
    setId(newId);
  };

  const changeNameHandler = (newName) => {
    setName(newName);
  };
  const changeSurnameHandler = (newSurname) => {
    setSurname(newSurname);
  };
  const changeBrithDateHandler = (newBrithDate) => {
    setBrithDate(newBrithDate);
  };
  const submitHandler = () => {
    createHandler({
      id: id,
      name: name,
      surname: surname,
      brithDate: brithDate
    });
  };
  //if (create === false)
    return (
      <>
        <Form>
        <Form.Field>
            <label>Id</label>
            <input
              placeholder="Id"
              onChange={(e) => changeIdHandler(e.currentTarget.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>name</label>
            <input
              placeholder="Name"
              onChange={(e) => changeNameHandler(e.currentTarget.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>surname</label>
            <input
              placeholder="Surname"
              onChange={(e) => changeSurnameHandler(e.currentTarget.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>brith date</label>
            <input
              placeholder="Brith Date"
              onChange={(e) => changeBrithDateHandler(e.currentTarget.value)}
            />
          </Form.Field>
          <Button type="submit" onClick={() => submitHandler()}>
            Submit
          </Button>
        </Form>
      </>
    );
 // return "";
};

export default FormValue;