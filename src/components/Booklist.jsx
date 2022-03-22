import { useState } from "react";
import SingleBook from "./SingleBook";
import { Col, Container, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

const BookList = ({ books }) => {
  const [state, setState] = useState({
    searchQuery: "",
    selectedBook: null,
  });

  return (
    <Container>
      <Row>
        <Col md={8}>
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Search</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Search here"
                  value={state.searchQuery}
                  onChange={(e) =>
                    setState({
                      searchQuery: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {books
              .filter((b) => b.title.toLowerCase().includes(state.searchQuery))
              .map((b) => (
                <Col xs={3} key={b.asin}>
                  <SingleBook
                    book={b}
                    selectedBook={state.selectedBook}
                    changeSelectedBook={(asin) =>
                      setState({
                        selectedBook: asin,
                      })
                    }
                  />
                </Col>
              ))}
          </Row>
        </Col>
        <Col md={4}>
          <CommentArea asin={state.selectedBook} />
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
