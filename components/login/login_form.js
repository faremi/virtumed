import { useState } from "react";
import { CustomTextForm } from "../textForm";
import apolloClient from "../../lib/apollo";
import { gql } from "@apollo/client";

let LOGIN_USER = gql`
  query Query($email: String!, $password: String!) {
    users(email: $email, password: $password) {
      code
      id
      message
    }
  }
`;
function LoginForm(params) {
  const [email, setEmail] = useState("");
  const [pasword, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleEmail(a) {
    setEmail(a.target.value);
  }
  const handlePassword = (a) => {
    setPassword(a.target.value);
  };
  async function loginUser(a) {
    a.preventDefault();
    try {
      const user = await apolloClient.query({
        query: LOGIN_USER,
        variables: {
          email: email,
          password: pasword,
        },
      });
      console.log(user);
      setError(user.data.message);
    } catch (e) {
      console.log("Working");
      return setError("Unable to process request");
    }
  }
  return (
    <section className="min-h-screen w-screen flex justify-center  font-sans py-10 px-1  md:p-10 bg-gradient-to-r  from-teal-200 to-cyan-200 ">
      <div className="m-auto bg-white px-4 lg:px-16 md:px-12 xl:px-20 rounded-lg py-16">
        error
        <div className="text-3xl font-bold mb-5 text-teal-500 ">Login</div>
        <p
          div
          className="md:text-2xl lg:text-2xl xl:text-2xl text-1xl font-light text-gray-500"
        >
          Please enter your login details below.
        </p>
        <div className="content">
          <form action="#">
            <div className="flex flex-col align-middle">
              <CustomTextForm
                handler={handleEmail}
                label="Email"
                type="email"
                placeholder="Enter your email address"
              />
              <CustomTextForm
                handler={handlePassword}
                label="Password"
                type="password"
                placeholder="Enter your email address"
              />
            </div>
            <button
              onClick={loginUser}
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

export default LoginForm;
