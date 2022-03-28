import Image from "next/image";
import styles from "../../styles/About.module.css";
import image from "../../public/doctor_image.jpg";
import image1 from "../../public/item1.jpeg";

function AboutUsBody(props) {
  return (
    <section className="lg:mx-40 font-sans">
      <div className="pt-32  mb-10  px-3 md:mx-3">
        <Image
          className="w-full rounded-lg"
          src={image}
          layout="responsive"
          alt="image"
        />
      </div>
      <div className="flex justify-center mb-10">
        <p className="p-2 text-md md:text-xl font-light leading-10 tracking-wider">
          VirtuMed is a telemedicine platform dedicated to providing quality
          health care services to those who need it. The VirtuMed web
          application allows patients and qualified doctors to virtually connect
          wherever they are, aiding in comfort and convenience. VirtuMed is
          passionate about providing high quality virtual health care services
          to patients from a diverse team of highly qualified doctors.
        </p>
      </div>

      <div className="flex flex-col justify-center mb-10">
        <h2 className="text-teal-500 text-2xl mb-2 block ml-2">
          VirtuMed for Patients
        </h2>
        <p className="p-2 text-md md:text-xl font-light leading-10 tracking-wider">
          To our valued patients, With VirtuMed, you can virtually connect with
          qualified specialists, aiding in your comfort and convenience. Due to
          its adaptability and responsiveness, you can use any device with
          internet connection to communicate with doctors. You can have a
          personalized one-on-one interaction with qualified doctors from the
          comfort of your own home, at an affordable price.
        </p>
      </div>
      <div className="flex flex-col justify-center mb-10">
        <h2 className="text-teal-500 text-2xl mb-2 block ml-2">
          VirtuMed for Doctors
        </h2>
        <p className="p-2 text-md md:text-xl font-light leading-10 tracking-wider">
          To our trusted doctors, VirtuMed allows you to to enhance your
          practice and expand your reach beyond geographical boundaries. Our
          easy to use web application allows you to manage your healthcare
          practice and virtually keep in touch with your patients wherever you
          are.
        </p>
      </div>
      <div className="flex flex-col p-4 bg-teal-50 rounded-2xl">
        <h2 className="text-teal-500 text-2xl mb-2">Our Mission</h2>
        <p className="flex text-gray-400">
          Our mission is to enhance the quality of life of our valued patients
          and to increase mobility in health care services, making the
          availability of medical care to all possible.
        </p>
      </div>
      <div className="flex flex-col p-4  bg-teal-50 rounded-2xl mb-10">
        <h2 className="text-teal-500 text-2xl mb-2">Our Values</h2>
        <p className="flex text-gray-400">
          VirtuMed strives to build and maintain quality patient-doctor
          relationships and meet the healthcare needs of patients anywhere and
          anytime, without the limits of geographic boundaries. We believe that
          everyone has the right to quality medical services, and we are
          passionate to deliver accessible, affordable and reachable medical
          services to all.
        </p>
      </div>
      <h1 className="text-teal-700 text-2xl mb-4 ml-2">
        Meet our Virtumed Board of Directors
      </h1>
      <div className={styles.containerWrap}>
        <div className=" px-3 md:mx-0">
          <Image
            className="w-full mb-10 mt-10 rounded-2xl h-full"
            src={image1}
            alt="ima111ge"
          />
        </div>
        <div className="p-4 w-2/3">
          <div className="flex mb-4 align-middle">
            <p className="flex flex-col text-xl font-light">
              <strong className="text-teal-500 font-semibold">
                Dlamini Siphosethu
              </strong>
              202004019
            </p>
          </div>
          <div className="flex mb-4 align-middle">
            <p className="flex flex-col text-xl font-light">
              <strong className="text-teal-500 font-semibold">
                Nxumalo Kwanele
              </strong>
              202004367
            </p>
          </div>
          <div className="flex mb-4 align-middle">
            <p className="flex flex-col text-xl font-light">
              <strong className="text-teal-500 font-semibold">
                Mthupha Mlandvo
              </strong>
              202003234
            </p>
          </div>
          <div className="flex mb-4 align-middle">
            <p className="flex flex-col text-xl font-light">
              <strong className="text-teal-500 font-semibold">
                Dlamini Tifeziwe
              </strong>
              202004168
            </p>
          </div>
          <div className="flex mb-4 align-middle">
            <p className="flex flex-col text-xl font-light">
              <strong className="text-teal-500 font-semibold">
                Faremi Saheed
              </strong>
              202003491
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsBody;
