import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Container from "react-bootstrap/Container";
import SearchBox from "../components/SearchBox";
import ResultTable from "../components/ResultTable";
import Footer from "../components/Footer";
import SearchProvider from "@/components/SearchProvider";
import ToastAlert from "@/components/ToastAlert";

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
      <SearchProvider>
        <ToastAlert />
        <SearchBox />
        <ResultTable />
      </SearchProvider>
      <Footer />
    </Container>
  );
};

export default Home;
