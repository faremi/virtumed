import styles from "../styles/ItemList.module.css";

function ItemList(params) {
  return (
    <section className="xl:mx-40 font-sans ">
      <div className={styles.card}>
        <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full text-center ">
          <div className="flex flex-col relative h-full bg-teal-50 ">
            <img src="/../item1.jpeg" className="h-2/3"></img>
            <div className="flex mt-10 ">
              VirtuMed provides patients with the most convenient care. You can
              virtually connect with qualified doctors from wherever you are.
            </div>
          </div>
          <div className="flex flex-col relative bg-teal-50  h-full text-center">
            <img src="/../item2.jpeg" className="h-2/3"></img>
            <div className="flex mt-10">
              We strive to give patients a personalized doctors-visit
              experience. Our platform allows doctors to connect with patients
              from anywhere, aiding in comfort and ultimate convenience for both
              patients and professionals.
            </div>
          </div>
          <div className="flex flex-col relative bg-teal-50  h-full text-center">
            <img src="/../item3.jpeg" className="h-2/3"></img>
            <div className="flex mt-10">
              Patients are able to receive the best quality health care as
              VirtuMed allows doctors to analyse the medical records of patients
              and provide personalized health care services.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItemList;
