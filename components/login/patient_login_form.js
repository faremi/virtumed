import styles from "../../styles/Form.module.css";
function PatientLoginForm(params) {
  return (
    <div className=" flex justify-center font-sans align-middle py-10 px-1  md:p-10 bg-gradient-to-r  from-teal-200 to-cyan-200 mb-20 mt-10 lg:mx-40 ">
      <div className=" bg-white px-2 lg:px-16 md:px-12 xl:px-20 rounded-lg py-16">
        <div className="text-3xl font-bold mb-5 ">Login</div>
        <p
          div
          className="md:text-2xl lg:text-2xl xl:text-2xl text-1xl font-bold mb-5 text-gray-500"
        >
          Please enter your login details below.
        </p>
        <div className="content">
          <form action="#">
            <div className="flex flex-col align-middle">
              <div className="mt-6 mb-5">
                <span className="block mb-1 font-medium">Email</span>
                <input
                  className="h-12 w-full mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 border-b-2"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className={styles.inputBoxs}>
                <span className="block mb-1 font-medium">Password</span>
                <input
                  className="h-12 w-full mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 border-b-2"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <div className={styles.button}>
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PatientLoginForm;
