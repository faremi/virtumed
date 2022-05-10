import { useState } from "react";
import { CustomTextForm } from "../textForm";
import apolloClient from "../../lib/apollo";
import { gql } from "@apollo/client";
import { useRouter } from "next/router";
import cookieCutter from "cookie-cutter";

let LOGIN_USER = gql`
  mutation Mutation(
    $usersEmail: String!
    $usersPassword: String!
    $firstName: String!
    $lastName: String!
    $phoneNumber: String!
    $accountType: String!
  ) {
    users(
      email: $usersEmail
      password: $usersPassword
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
  const [lastName, setLastName] = useState("");
  const [lastNameValidator, setLastNameValidator] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberValidator, setPhoneNumberValidator] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordValidator, setConfirmPasswordValidator] = useState("");
  const [accountType, setAccountType] = useState(false);
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
  function validateConfirmPassword(value, passwordValue) {
    if (value === passwordValue) {
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
  function handleAccountType(a) {
    setAccountType(!accountType);
  }
  function handleFirstName(a) {
    setFirstNameValidator("");
    setError("");
    setFirstName(a.target.value);
  }
  function handlePhoneNumber(a) {
    setPhoneNumberValidator("");
    setError("");
    setPhoneNumber(a.target.value);
  }
  function handleLastName(a) {
    setLastNameValidator("");
    setError("");
    setLastName(a.target.value);
  }
  const handlePassword = (a) => {
    setValidatePassword("");
    setError("");
    setPassword(a.target.value);
  };
  const handleConfirmPassword = (a) => {
    setConfirmPasswordValidator("");
    setError("");
    setConfirmPassword(a.target.value);
  };
  const router = useRouter();
  async function registerUser(a) {
    console.log(accountType);
    a.preventDefault();
    if (!validateEmailAddresss(email)) {
      return setValidateEmail("Enter a valid email address");
    } else if (!validateUserPassword(password)) {
      return setValidatePassword("Enter password with more than 6 characters");
    } else if (!validateValue(firstName)) {
      return setFirstNameValidator("Enter a valid name");
    } else if (!validateValue(lastName)) {
      return setLastNameValidator("Enter a valid name");
    } else if (!validateValue(phoneNumber)) {
      return setPhoneNumberValidator("Enter a valid phone number");
    } else if (!validateConfirmPassword(confirmPassword, password)) {
      return setConfirmPasswordValidator("Password doesnt match");
    } else {
      setValidateEmail("");
      setValidatePassword("");
      setFirstNameValidator("");
      setLastNameValidator("");
      setPhoneNumberValidator("");
      setConfirmPasswordValidator("");
      let accountValue;

      if (!accountType) {
        accountValue = "PATIENT";
      } else {
        accountValue = "DOCTOR";
      }
      try {
        setLoading(true);
        const user = await apolloClient.mutate({
          mutation: LOGIN_USER,
          variables: {
            usersEmail: email,
            usersPassword: password,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            accountType: accountValue,
          },
        });
        setError(user.data.users.message);
        setLoading(false);
        if (user.data.users.code === 1) {
          cookieCutter.set("myCookieName", user.data.users.id);
          console.log("Working");
          return router.push("/admin");
        }
        console.log(user);
      } catch (e) {
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
          Our platform allows patients to connect with professional medical
          doctors from the country and access medical services whenever needed,
          at anytime. Join our VirtuMed family today.
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
                message={lastNameValidator}
                handler={handleLastName}
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
                message={phoneNumberValidator}
                handler={handlePhoneNumber}
                label="Phone Number"
                type="number"
                placeholder="Phone Number"
              />
              <CustomTextForm
                message={confirmPasswordValidator}
                handler={handleConfirmPassword}
                label="Password"
                type="password"
                placeholder="Enter your password"
              />{" "}
              <CustomTextForm
                message={validatePassword}
                handler={handlePassword}
                label="Password"
                type="password"
                placeholder="Confirm your password"
              />
              <div className="flex flex-row my-4">
                <input
                  onChange={handleAccountType}
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
              Registration
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default PatientRegistrationForm;
