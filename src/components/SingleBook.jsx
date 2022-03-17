import { Component } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class CustomBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={6}>
            <Card
              onClick={() => this.setState({ selected: !this.state.selected })}
              style={{
                border: this.state.selected ? "3px solid blue" : "none",
                width: "30rem",
              }}
            >
              <Card.Img variant="top" src={this.props.book.img} />
              <Card.Body>
                <Card.Title>{this.props.book.title}</Card.Title>
                <Card.Text>{`${this.props.book.price}€`}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {this.state.selected && (
              <CommentArea selectedBook={this.props.book.asin} />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CustomBook;
