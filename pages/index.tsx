import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";

const Home: NextPage = () => {
  return (
    <Container as="main">
      <Head>
        <title>Search GitHub Repos</title>
        <meta name="description" content="Search GitHub repos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>GitHub Repositories Search</h1>

      <p className={styles.description}>
        Get started by using the search box...
      </p>

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

      <footer className="text-center mt-5">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </Container>
  );
};

export default Home;
