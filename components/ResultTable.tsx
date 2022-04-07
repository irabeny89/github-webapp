import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function ResultTable() {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <Table striped bordered hover size="sm" responsive>
            <thead>
              <tr>
                <th>Repo</th>
                <th>Author</th>
                <th>Stars</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
