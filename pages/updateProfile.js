import styles from "../styles/Form.module.css";

export default function UpdateProfile(params) {
  return (
    <section className="bg-gray-50  px-2  md:py-10 md:px-10   ">
      <div className="mt-2 mb-5">
        <h className="text-2xl">Profile</h>
      </div>

      <div className="md:flex px-2 py-10 md:w-2/3 md:m-auto  md:p-10 bg-white md:justify-center md:align-middle">
        <h className="text-2xl">User Information</h>
        <div className="flex flex-col w-full md:w-2/3 mt-20 ">
          <div className="md:py-4">
            <div className={styles.inputBoxs}>
              <span className="block mb-1 font-medium">First Name</span>
              <input
                //   onChange={handlePassword}
                className="h-12 w-full mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 border-b-2"
                type="name"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <div className="py-4">
            <div className={styles.inputBoxs}>
              <span className="block mb-1 font-medium">Last Name</span>
              <input
                //   onChange={handlePassword}
                className="h-12 w-full mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 border-b-2"
                type="name"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <div className="py-4">
            <div className={styles.inputBoxs}>
              <span className="block mb-1 font-medium">Phone Number</span>
              <input
                //   onChange={handlePassword}
                className="h-12 w-full mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 border-b-2"
                type="name"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <div className="py-4">
            <div className={styles.inputBoxs}>
              <span className="block mb-1 font-medium">Account Type</span>
              <input
                //   onChange={handlePassword}
                className="h-12 w-full mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 border-b-2"
                type="name"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div className="my-10"></div>
      <div className="md:flex px-2 py-10 md:w-2/3 md:m-auto  md:p-10 bg-white md:justify-center md:align-middle">
        <h className="text-2xl">Update Profile</h>
        <div className="flex flex-col w-full md:w-2/3 mt-20 ">
          <div className="md:py-4">
            <div className={styles.inputBoxs}>
              <span className="block mb-1 font-medium">First Name</span>
              <input
                //   onChange={handlePassword}
                className="h-12 w-full mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 border-b-2"
                type="name"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="mb-3 w-full">
              <span className="block mb-1 font-medium">
                Medical Certificate
              </span>
              <input
                className="h-12 w-full mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 border-b-2"
                type="file"
                id="formFile"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
