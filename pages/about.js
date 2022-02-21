import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footers from "../components/footer";
import Navbar from "../components/nav_bar";
import AboutUsBody from "../components/about/body";
export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <AboutUsBody />
      <Footers />
    </div>
  );
}
