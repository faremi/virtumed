import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footers from "../components/footer";
import Navbar from "../components/nav_bar";
import DoctorLoginForm from "../components/login/doctor_login_form";
export default function DoctorLogin() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="pt-20"></div>
      <DoctorLoginForm />
      <Footers />
    </div>
  );
}