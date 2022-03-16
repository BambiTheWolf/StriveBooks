import { Component } from "react";
import { Card, Row } from "react-bootstrap";

import books from "../data/scifi.json";

class CustomList extends Component {
  state = {
    selectedBooks: null,
  };

  render() {
    return (
      <Row>
        {books.map((book) => (
          <Card style={{ width: "10rem" }} key={book.asin}>
            <Card.Img
              variant="top"
              src={book.img}
              onClick={() =>
                this.setState({
                  selectedBooks: book,
                })
              }
            />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>{`${book.price}€`}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
    );
  }
}

export default CustomList;
