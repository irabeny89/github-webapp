import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import SearchContext from "@/contexts/SearchContext";
import github from "@/utils/axios";
import { useContext, useState, useRef } from "react";
import { generateUri } from "../utils";

export default function Pagination() {
  const [{ searchTerm }, dispatch] = useContext(SearchContext),
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
