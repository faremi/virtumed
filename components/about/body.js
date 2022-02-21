import Image from "next/image";
import styles from "../../styles/About.module.css";
import image from "../../public/doctor_image.jpg";
import image1 from "../../public/item1.jpeg";

function AboutUsBody(props) {
  return (
    <section className="lg:mx-40">
      <div className="pt-32  mb-10">
        {/* <div className="w-full rounded-lg"> */}
        <Image
          className="w-full rounded-lg"
          src={image}
          layout="responsive"
          alt="image"
        />
        {/* </div> */}
        {/* <img  src="/../../doctor_image.jpg"></img> */}
      </div>
      <div className="flex mb-10">
        Culpa esse architecto ad earum ut iusto mollitia omnis. Ratione
        consequatur veritatis error quasi nobis itaque et aut porro. Sed
        doloribus itaque et velit deserunt. Quo explicabo recusandae voluptas
        rerum itaque sint facilis vitae autem.Odit culpa minus perferendis enim
        esse. Numquam molestias dolorem voluptatem. Veniam perspiciatis sed.
        Voluptatem nihil possimus nihil blanditiis delectus. Dolorem sit fuga
        eos quibusdam neque. Impedit ex eligendi quis corporis voluptatem qui
        quisquam possimus distinctio. Voluptas ipsam vero tenetur facere sit et
        sit. Incidunt consequatur nulla. In qui non in dolor dolorem quisquam
        autem. Velit dignissimos dicta voluptas dolorum nemo commodi quisquam
        perspiciatis animi. Perferendis officiis occaecati iste. Praesentium
        eveniet dolorem voluptates consequatur nulla. Aliquam voluptatem nam
        tenetur.
      </div>
      <div className="flex flex-col p-8 h-36 bg-teal-50 rounded-2xl">
        <h2>Our Mission</h2>
        <p className="flex">
          Deserunt rem est corporis hic alias ut.Deserunt rem est corporis hic
          alias ut .
        </p>
      </div>
      <div className="flex flex-col p-8 h-36 bg-teal-50 rounded-2xl mb-10">
        <h2>Our Mission</h2>
        <p className="flex">
          Deserunt rem est corporis hic alias ut.Deserunt rem est corporis hic
          alias ut .
        </p>
      </div>
      <h1 className="text-teal-700 text-3xl mb-4">Our Values</h1>
      <div className={styles.containerWrap}>
        <div className={styles.containerImage}>
          <Image
            className="w-full mb-10 mt-10 rounded-2xl h-full"
            src={image1}
            alt="ima111ge"
          />
          {/* <img alt="imagess" className="" src="/../../item1.jpeg"></img> */}
        </div>
        <div className="">
          <div className="flex mb-4 align-middle">
            <p className="text-xl ">
              <strong className="text-teal-500">Service</strong>- We strive to
              Accusantium porro quae velit sit. Corrupti dolorum qui. Et aut
              delectus et omnis rerum veritatis vel error.
            </p>
          </div>
          <div className="flex mb-4 align-middle">
            <p className="text-xl ">
              <strong className="text-teal-500">Service</strong>- We strive to
              anticipate and meet the needs of our patients, physicians, and
              co-worker
            </p>
          </div>
          <div className="flex mb-4 align-middle">
            <p className="text-xl ">
              <strong className="text-teal-500">Service</strong>- We strive to
              anticipate and meet the needs of our patients, physicians, and
              co-worker
            </p>
          </div>
          <div className="flex mb-4 align-middle">
            <p className="text-xl ">
              <strong className="text-teal-500">Service</strong>- We strive to
              anticipate and meet the needs of our patients, physicians, and
              co-worker
            </p>
          </div>
          <div className="flex mb-4 align-middle">
            <p className="text-xl ">
              <strong className="text-teal-500">Service</strong>- We strive to
              anticipate and meet the needs of our patients, physicians, and
              co-worker
            </p>
          </div>
          <div className="flex mb-4 align-middle">
            <p className="text-xl ">
              <strong className="text-teal-500">Service</strong>- We strive to
              anticipate and meet the needs of our patients, physicians, and
              co-worker
            </p>
          </div>
          <div className="flex mb-4 align-middle">
            <p className="text-xl ">
              <strong className="text-teal-500">Service</strong>- We strive to
              anticipate and meet the needs of our patients, physicians, and
              co-worker
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsBody;
