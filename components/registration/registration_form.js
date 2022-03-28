import { useState } from "react";
import { CustomTextForm } from "../textForm";
import apolloClient from "../../lib/apollo";
import { gql } from "@apollo/client";

let LOGIN_USER = gql`
  mutation Mutation(
    $usersEmail2: String!
    $usersPassword2: String!
    $firstName: String!
    $lastName: String!
    $phoneNumber: String!
    $accountType: String!
  ) {
    users(
      email: $usersEmail2
      password: $usersPassword2
      firstName: $firstName
      lastName: $lastName
      phoneNumber: $phoneNumber
      accountType: $accountType
    ) {
      code
      id
      message
    }
  }
`;

function PatientRegistrationForm(params) {
  const [email, setEmail] = useState("");
  const [validateEmail, setValidateEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [firstNameValidator, setFirstNameValidator] = useState("");
  const [validatePassword, setValidatePassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  function validateEmailAddresss(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;
  }
  function validateValue(value) {
    if (value.length > 3) {
      return true;
    }
    return false;
  }
  function validateUserPassword(passwords) {
    if (passwords.length > 6) {
      return true;
    }
    return false;
  }
  function handleEmail(a) {
    setValidateEmail("");
    setError("");
    setEmail(a.target.value);
  }
  function handleFirstName(a) {
    setFirstNameValidator("");
    setError("");
    setFirstName(a.target.value);
  }
  const handlePassword = (a) => {
    setValidatePassword("");
    setError("");
    setPassword(a.target.value);
  };
  async function registerUser(a) {
    a.preventDefault();
    if (!validateEmailAddresss(email)) {
      return setValidateEmail("Enter a valid email address");
    } else if (!validateUserPassword(password)) {
      return setValidatePassword("Enter password with more than 6 characters");
    } else if (!validateValue(firstName)) {
      return setFirstNameValidator("Enter a valid name");
    } else {
      setValidateEmail("");
      setValidatePassword("");
      try {
        setLoading(true);
        const user = await apolloClient.query({
          query: LOGIN_USER,
          variables: {
            firstName,
            email,
            password,
          },
        });
        setError(user.data.users.message);
        setLoading(false);
        console.log(user);
      } catch (e) {
        console.log("Working");
        setLoading(false);
        return setError("Unable to process request");
      }
    }
  }
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
                message={firstNameValidator}
                handler={handleFirstName}
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
                message={validateEmail}
                handler={handleEmail}
                label="Email"
                type="email"
                placeholder="Enter your email address"
              />
              <CustomTextForm
                // handler={handlePassword}
                label="Phone Number"
                type="number"
                placeholder="Phone Number"
              />
              <CustomTextForm
                message={validatePassword}
                handler={handlePassword}
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
              <div className="flex flex-row my-4">
                <input
                  type="checkbox"
                  className=" checked:bg-teal-500 mt-1 mr-5"
                />

                <label className="ml-3 ">
                  Are your registering as a medical doctor?
                </label>
              </div>
            </div>
            <div className="my-2 text-xl text-red-500">{error}</div>
            <div className="my-2 text-xl text-green-500">{loading}</div>
            <button
              onClick={registerUser}
              type="submit"
              className="bg-gradient-to-r  from-teal-200 to-cyan-200 hover:bg-gradient-to-r  hover:from-teal-500 hover:to-cyan-500 py-2 px-4 rounded w-full mt-2"
            >
              Registrat
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default PatientRegistrationForm;
