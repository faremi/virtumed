import styles from "../../styles/Form.module.css";
function DoctorForm(params) {
  return (
    <div className="flex justify-center font-sans align-middle p-10 bg-gradient-to-r  from-teal-200 to-cyan-200 mb-20 mt-10 lg:mx-40">
      <div className="container bg-white px-4 lg:px-16 md:px-12 xl:px-20 rounded-lg py-16">
        <div className="text-3xl font-bold mb-5">Registration</div>
        <p
          div
          className="md:text-2xl lg:text-2xl xl:text-2xl text-1xl font-bold mb-5 text-gray-500"
        >
          Our platform allows you to connect to *patients stuff*. Please sign up
          below
        </p>
        <div className="content">
          <form action="#">
            <div className="flex flex-wrap justify-between">
              <div className={styles.inputBox}>
                <span className="block mb-1 font-medium">Full Name</span>
                <input
                  className="h-12 w-full mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 border-b-2"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className={styles.inputBox}>
                <span className="block mb-1 font-medium">Username</span>
                <input
                  className="h-12 w-full mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 border-b-2"
                  type="text"
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className={styles.inputBox}>
                <span className="block mb-1 font-medium">Email</span>
                <input
                  className="h-12 w-full mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 border-b-2"
                  type="text"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className={styles.inputBox}>
                <span className="block mb-1 font-medium">Phone Number</span>
                <input
                  className="h-12 w-full mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 border-b-2"
                  type="text"
                  placeholder="Enter your number"
                  required
                />
              </div>
              <div className={styles.inputBox}>
                <span className="block mb-1 font-medium">Password</span>
                <input
                  className="h-12 w-full mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 border-b-2"
                  type="text"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className={styles.inputBox}>
                <span className="block mb-1 font-medium">Confirm Password</span>
                <input
                  className="h-12 w-full mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 border-b-2"
                  type="text"
                  placeholder="Confirm your password"
                  required
                />
              </div>

              <div className={styles.inputBox}>
                <span className="block mb-1 font-medium">
                  Region of Practice
                  <input
                    className="h-12 w-full mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 border-b-2"
                    list="region"
                    name="Regions"
                    placeholder="Select region of practice"
                    required
                  />
                </span>
                <datalist id="region">
                  <option value="Hhohho"></option>
                  <option value="Manzini"></option>
                  <option value="Shiselweni"></option>
                  <option value="Lubombo"></option>
                </datalist>
              </div>
              <div className={styles.inputBox}>
                <span className="block mb-1 font-medium">
                  Experience
                  <input
                    className="h-12 w-full mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 border-b-2"
                    list="experience"
                    name="Experience"
                    placeholder="Select years of experience"
                    required
                  />
                </span>
                <datalist id="experience">
                  <option value="less than 1 year"></option>
                  <option value="1-3 years"></option>
                  <option value="4-5 years"></option>
                  <option value="6-8 years"></option>
                  <option value="9+ years"></option>
                </datalist>
              </div>

              <div className={styles.inputBox}>
                <span className="block mb-1 font-medium">
                  Speciality
                  <input
                    className="h-12 w-full mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 border-b-2"
                    list="speciality"
                    name="Speciality"
                    placeholder="Select medical speciality"
                    required
                  />
                </span>
                <datalist id="speciality">
                  <option value="General Pathologist"></option>
                  <option value="Family Pysician"></option>
                  <option value="Pediatrician"></option>
                  <option value="Dermatologist"></option>
                  <option value="Cardiologist"></option>
                  <option value="Othropedic"></option>
                  <option value="Gastroenterologist"></option>
                  <option value="Neurologist"></option>
                  <option value="Radiologist"></option>
                  <option value="Psychiatrist"></option>
                  <option value="Other"></option>
                </datalist>
              </div>
            </div>

            <div className={styles.button}>
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DoctorForm;
