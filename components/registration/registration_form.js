import { CustomTextForm } from "../textForm";

function PatientRegistrationForm(params) {
  return (
    <section className="min-h-screen w-screen flex justify-center  font-sans py-10 px-1  md:p-10 bg-gradient-to-r  from-teal-200 to-cyan-200 ">
      <div className="mx-4 m-auto bg-white px-4 lg:px-16 md:px-12 xl:px-20 rounded-lg py-16">
        <div className="text-3xl font-bold mb-5 text-teal-500 ">
          Registration
        </div>
        <p div className="text-sm font-light text-gray-500 max-w-xl">
          Our platform allows you to connect with professional medical doctors
          from the country and access medical services whenever you need them.
          Join our VirtuMed family today.
        </p>
        <div className="content">
          <form action="#">
            <div className="flex flex-col align-middle">
              <CustomTextForm
                // handler={handleEmail}
                label="First Name"
                type="text"
                placeholder="Enter your firstname"
              />
              <CustomTextForm
                // handler={handlePassword}
                label="Last Name"
                type="text"
                placeholder="Enter your lastname"
              />
              <CustomTextForm
                // handler={handlePassword}
                label="Email"
                type="email"
                placeholder="Phone Number"
              />
              <CustomTextForm
                // handler={handlePassword}
                label="Phone Number"
                type="number"
                placeholder="Phone Number"
              />
              <CustomTextForm
                // handler={handlePassword}
                label="Password"
                type="password"
                placeholder="Enter your password"
              />{" "}
              <CustomTextForm
                // handler={handlePassword}
                label="Password"
                type="password"
                placeholder="Confirm your password"
              />
            </div>
            <button
              // onClick={loginUser}
              type="submit"
              className="bg-gradient-to-r  from-teal-200 to-cyan-200 hover:bg-gradient-to-r  hover:from-teal-500 hover:to-cyan-500 py-2 px-4 rounded w-full mt-2"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default PatientRegistrationForm;
