import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { FormEvent, useContext, useState } from "react";
import github from "utils/axios";
import { generateUri } from "utils/index";
import SearchContext from "contexts/SearchContext";

export default function SearchBox() {
  const [isLoading, setLoading] = useState(false),
    [, dispatch] = useContext(SearchContext),
    handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const searchTerm = new FormData(e.currentTarget).get("search") as string;
      // if input is empty do not send network request
      // then update the data states
      !!searchTerm
        ? (setLoading(true),
          github(generateUri(searchTerm))
            .then(
              ({ data }: any) => (
                setLoading(false),
                dispatch({
                  type: "setSearchData",
                  value: data
                }),
                dispatch({
                  type: "setSearchTerm",
                  value: searchTerm
                })
              )
            )
            .catch(
              (error: any) => (
                console.error(error),
                dispatch({
                  type: "setErrorMessage",
                  value: error.message
                }),
                setLoading(false)
              )
            ))
        : e.preventDefault(),
        e.stopPropagation();
    };

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col sm="10">
          <Form onSubmit={handleSubmit}>
            <InputGroup className="justify-content-center my-3">
              <Form.FloatingLabel label="Enter search term">
                <Form.Control
                  placeholder="Enter your search term"
                  arial-label="search GitHub repositories"
                  name="search"
                  onChange={() => dispatch({
                    type: "setSearchTerm",
                    value: ""
                  })}
                />
              </Form.FloatingLabel>
              <Button type="submit">
                {isLoading ? <Spinner animation="grow" /> : `Search`}
              </Button>
            </InputGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
