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
import { useEffect, useState } from "react";
import github from "../axios";
import SearchBox from "../components/SearchBox";
import ResultTable from "../components/ResultTable";
import Footer from "../components/Footer";

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
      <SearchBox />
      <ResultTable />
      <Footer />
    </Container>
  );
};

export default Home;
