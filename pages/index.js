import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/nav_bar";
import Footers from "../components/footer";
import HomeBody from "../components/home_body";
import ItemList from "../components/item_lists";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>VirtuMed</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <HomeBody />
        <ItemList />
      </main>
      <div className="pt-5"></div>
      <Footers />
    </div>
  );
}
