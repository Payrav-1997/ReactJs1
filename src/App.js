import React, { useState } from "react";
import CardItem from "./components/card-item-components";
import FormValue from "./components/form-components";
import { Button } from "semantic-ui-react";
function App() {

 

  

  const [values, setValues] = useState([]);

  const [create, setCreate] = useState(false);



  const ValueDeleteHandler = (id) => {
    const valList = values.filter((p) => p.id !== id);
    setValues(valList);
  };
  const ValueCreateHandler = (value) => {
    if (value) {
      setValues(prevState => [value, ...prevState]);
      setCreate(false);
    }
  };

  const formToogleHandler = () => {
    setCreate(!create);
    console.log(create);
  };

  return (
    <>
      <div style={{ marginTop: 120 }}>
        <FormValue create={create} createHandler={ValueCreateHandler} />
        <Button
          style={{ marginTop: 10 }}
          color="green"
          onClick={() => formToogleHandler()}
        >
          Create
        </Button>  
        {values.map((value) => {
          return <CardItem value={value} delete={ValueDeleteHandler} />;
        })}
      </div>
    </>
  );
}

export default App;