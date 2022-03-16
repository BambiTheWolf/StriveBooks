import { Row, Col, Container, Card } from "react-bootstrap";
import books from "../data/scifi.json";
import CustomList from "./Booklist";

const CustomBook = (props) => (
  <Container fluid>
    <Row className="justify-content-left">
      <Col md={6}>
        <Card style={{ width: "28rem" }}>
          <Card.Img variant="top" src={books[1].img} />
          <Card.Body>
            <Card.Title>{books[1].title}</Card.Title>
            <Card.Text>{`${books[1].price}€`}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <CustomList books="../data/scifi.json" />
      </Col>
    </Row>
  </Container>
);

export default CustomBook;
