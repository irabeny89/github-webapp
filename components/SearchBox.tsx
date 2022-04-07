import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SearchBox() {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col sm="10">
          <Form>
            <InputGroup className="justify-content-center my-3">
              <Form.FloatingLabel label="Enter search term">
                <Form.Control
                  placeholder="Enter your search term"
                  arial-label="search GitHub repositories"
                  name="search"
                />
              </Form.FloatingLabel>
              <Button>Search</Button>
            </InputGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
