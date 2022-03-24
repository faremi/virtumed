import styles from "../styles/HomeBody.module.css";
function HomeBody() {
  return (
    <section className="font-sans">
      <div className="items-center font-sans pt-10 justify-center  "></div>
      <div className="flex justify-center align-middle my-14  lg:mx-28 flex-col-reverse lg:flex-row xl:flex-row md:flex-row">
        <div className={styles.col1}>
          <p className={styles.topTitle}> -------- ex sit libero</p>
          <h1>etempora oditt etemp ora oditt</h1>
          <p>
            Ullam est voluptas autem ea a et ut. Et soluta iste laborum. Ea
            dolorem alias necessitatibus recusandae ut et eligendi. Laborum qui
            hic maiores aperiam autem enim autem consequuntur. Aut est
            accusantium eum quae doloribus voluptate sed velit. Aut dolores iure
            esse eius quia facilis quibusdam cupiditate odio.
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
