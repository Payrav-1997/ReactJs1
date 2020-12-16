import React from "react";
import { Card, Button, Icon } from "semantic-ui-react";


const CardItem = (props) => {
  const { value } = props;
  return (
    
    <Card key={value.id}>
      <Card.Content>
        <Card.Header>Lastname:{value.surname}</Card.Header>
        <Card.Meta>
          <span>Firstname:{value.name}</span>
        </Card.Meta>
        <Card.Meta>
          <span>Brith Date:{value.brithDate}</span>
        </Card.Meta>
        <Card.Description>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          animated
          color="red"
          floated="right"
          onClick={() => props.delete(value.id)}
        >
          <Button.Content visible>Delete</Button.Content>
          <Button.Content hidden>
            <Icon name="trash alternate outline" />
          </Button.Content>
        </Button>
      </Card.Content>
    </Card>
  );
};
export default CardItem;