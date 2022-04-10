import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useContext } from "react";
import SearchContext from "contexts/SearchContext";

export default function ResultTable() {
  const [{ searchData }] = useContext(SearchContext)

  return (
    <Container>
      <Row className="my-5">
        <Col>
          <Table striped bordered hover size="sm" responsive>
            <thead>
              <tr>
                <th>Repo Name</th>
                <th>Author Name</th>
                <th>Stars</th>
              </tr>
            </thead>
            <tbody>
              {searchData?.items?.map(
                ({
                  id,
                  owner: { login, html_url: _html_url },
                  stargazers_count,
                  name,
                  html_url,
                }) => (
                  <tr key={id}>
                    <td>
                      <a href={html_url}>{name}</a>
                    </td>
                    <td>
                      <a href={_html_url}>{login}</a>
                    </td>
                    <td>{stargazers_count}</td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
