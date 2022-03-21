import { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import CommentArea from "./CommentArea";
import CustomBook from "./SingleBook";

class CustomList extends Component {
  state = {
    searchQuery: "",
    selected: undefined,
  };

  render() {
    return (
      <>
        <Row md={4} className="justify-content-center">
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Search here"
              value={this.state.searchQuery}
              onChange={(e) => this.setState({ searchQuery: e.target.value })}
            />
          </Form.Group>
        </Row>
        <Container fluid>
          <Row>
            <Col md={8}>
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
            </Col>
            <Col>
              <CommentArea />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default CustomList;
