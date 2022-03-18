import { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import CustomBook from "./SingleBook";

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
            .map((b) => (
              <Col xs={3} key={b.asin}>
                <CustomBook book={b} />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default CustomList;
