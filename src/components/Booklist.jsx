import { Component } from "react";
import { Card, Container, Row, Col, Form } from "react-bootstrap";

class CustomList extends Component {
  state = {
    searchQuery: "",
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {this.props.books
            .filter((b) =>
              b.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((book) => (
              <Card style={{ width: "10rem", padding: "2px" }} key={book.asin}>
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
      </Container>
    );
  }
}

export default CustomList;
