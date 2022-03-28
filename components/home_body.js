import styles from "../styles/HomeBody.module.css";
function HomeBody() {
  return (
    <section className="font-sans">
      <div className="items-center font-sans pt-10 justify-center  "></div>
      <div className="h-16 my-24"></div>
      <div className="flex justify-center align-middle my-14  lg:mx-28 flex-col-reverse lg:flex-row xl:flex-row md:flex-row">
        <div className={styles.col1}>
          <h1 className="">Welcome to VirtuMed</h1>
          <p>
            Our medical platform is dedicated to providing high quality virtual
            health care services to patients from a diverse team of highly
            qualified doctors. We aspire to provide accessible, affordable and
            quality health care services to all.
          </p>
          <button
            //   onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="mt-6 mb-5 bg-teal-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-800 focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            Register Now
          </button>
        </div>

        <div className={styles.col2}>
          <img
            alt="imagesssss"
            src="/../doctor.png"
            className={styles.imageController}
          ></img>
        </div>
      </div>
    </section>
  );
}
export default HomeBody;
