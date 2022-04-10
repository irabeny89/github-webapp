import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useContext, useRef, useState } from "react";
import github from "utils/axios";
import { generateUri } from "utils/index";
import SearchContext from "contexts/SearchContext";

export default function ResultTable() {
  const [{ searchData, searchTerm }, dispatch] = useContext(SearchContext),
    [isLoadingPrev, setLoadingPrev] = useState(false),
    [isLoadingNext, setLoadingNext] = useState(false),
    pageNumber = useRef(1);

  const handlePreviousPage = () => {
    pageNumber.current > 1 &&
      (setLoadingPrev(true),
      github(generateUri(searchTerm, pageNumber.current - 1))
        .then(
          ({ data }: any) => (
            setLoadingPrev(false),
            --pageNumber.current,
            dispatch({
              type: "setSearchData",
              value: data,
            })
          )
        )
        .catch(
          (error: any) => (
            console.error(error),
            dispatch({
              type: "setErrorMessage",
              value: error.message,
            }),
            setLoadingPrev(false)
          )
        ));
  };
  const handleNextPage = () => {
    setLoadingNext(true),
      github(generateUri(searchTerm, pageNumber.current + 1))
        .then(
          ({ data }: any) => (
            setLoadingNext(false),
            ++pageNumber.current,
            dispatch({
              type: "setSearchData",
              value: data,
            })
          )
        )
        .catch(
          (error: any) => (
            console.error(error),
            dispatch({
              type: "setErrorMessage",
              value: error.message,
            }),
            setLoadingNext(false)
          )
        );
  };

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
      <Row>
        <Col>
          <ButtonGroup>
            <Button
              className="border-3 border-white"
              onClick={handlePreviousPage}
            >
              {isLoadingPrev ? <Spinner animation="grow" /> : "\u003c"}
            </Button>
            <Button
              className="border-3 border-dark"
              variant="outline-secondary"
              onClick={handleNextPage}
            >
              {isLoadingNext ? <Spinner animation="grow" /> : "\u003e"}
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
}
