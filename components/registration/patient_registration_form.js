import styles from "../../styles/Form.module.css";
function PatientRegistrationForm(params) {
  return (
    <div className="flex justify-center align-middle p-10 bg-gradient-to-r  from-teal-200 to-cyan-200 mb-20 mt-10 lg:mx-40">
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
                <span className="block mb-1 font-medium">First Name</span>
                <input
                  className="h-12 w-full mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 border-b-2"
                  type="text"
                  placeholder="Enter your firstname"
                  required
                />
              </div>
              <div className={styles.inputBox}>
                <span className="block mb-1 font-medium">Last Name</span>
                <input
                  className="h-12 w-full mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 border-b-2"
                  type="text"
                  placeholder="Enter your lastname"
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
                <label
                  className=" text-2xl inline-flex items-center"
                  htmlFor="gender"
                >
                  Designated Gender At Birth
                </label>
                <div className="mt-5"></div>
                <input
                  className="form-radio"
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                />
                <label
                  className="ml-2 text-xl inline-flex items-center mr-4"
                  fohtmlFor="male"
                >
                  Male
                </label>
                <input
                  className="form-radio"
                  type="radio"
                  id="fmale"
                  name="gender"
                  value="fmale"
                />
                <label
                  className="ml-2 text-xl inline-flex items-center"
                  htmlFor="fmale"
                >
                  Female
                </label>
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

export default PatientRegistrationForm;
