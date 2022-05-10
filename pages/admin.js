import BookAppointment from "./../components/bookAppointment";
import UserProfile from "./../components/user_profile";
import Portfolio from "../components/portfolio";
import InfoTable from "../components/infoTable";
import {
  gql,
  useMutation,
  useQuery,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import { useState } from "react";
import Cookies from "cookies";
const USER_INFO = gql`
  query Query($userInformationId: String!) {
    userInformation(id: $userInformationId) {
      user {
        id
        email
        password
        messageUser {
          id
          other
          userId
        }
      }
      profile {
        id
        accountType
        firstName
        lastName
        phoneNumber
        region
        address
        nextOfKin
        nextOfKinNumber
        nextOfKinAddress
        gender
        experience
        speciality
        userId
      }
      payment {
        balance
      }
      paymentList {
        amount
        paymentId
        createdAt
      }
      doctorList {
        id
        other
        userId
        otherEmail
        speciality
        userEmail
        type
      }
      messageList {
        id
        other
        userId
        otherEmail
        type
        speciality
        userEmail
      }
    }
  }
`;

export async function getServerSideProps({ res, req }) {
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const baseUrl = req ? `${protocol}://${req.headers.host}` : "";

  const apolloClient = new ApolloClient({
    uri: baseUrl + "/api/graphql", //process.env.LOCALHOST,
    cache: new InMemoryCache(),
  });
  const cookies = new Cookies(req, res);
  let valuess = cookies.get("myCookieName");

  // let valuess = '627a38919409728374a2b90a';
  const data = await apolloClient.query({
    query: USER_INFO,
    variables: {
      userInformationId: valuess,
    },
  });


  console.log(data);
  return {
    props: {
      data,
    },
  };
}

function AdminPage(props) {
  const [loading, setLoading] = useState(false);
  function handleLoading(a) {
    a.preventDefault();
    setLoading(!loading);
  }
  const propsValue = props;
  console.log(props.data.data.userInformation.doctorList);
  return (
    <section className="p-2 md:p-10 font-sans">
      <div className="flex">
        <h1 className="text-2xl">Welcome Back</h1>
      </div>
      <div className="xl:grid xl:grid-rows-3 xl:grid-flow-col xl:gap-x-4">
        <Portfolio params={propsValue.data.data.userInformation.payment} />
        <UserProfile params={propsValue.data.data.userInformation} />
        <div className="col-span-7 xl:row-span-6">
          {propsValue.data.data.userInformation.profile.accountType ===
          "PATIENT" ? (
            <BookAppointment handle={handleLoading} />
          ) : (
            ""
          )}

          {propsValue.data.data.userInformation.profile.accountType ===
            "PATIENT" && loading ? (
            <div>
              <section className="text-center">
                Available Doctor Information
              </section>
              <InfoTable
                params={propsValue.data.data.userInformation.doctorList}
              />
            </div>
          ) : (
            ""
          )}

          {propsValue.data.data.userInformation.messageList.length == 0 ? (
            <section className="text-center">
              No message availabile. Kindly book a medical appointment
            </section>
          ) : (
            <div>
              <section className="text-center">
                Available Appointment Information
              </section>
              <InfoTable
                params={propsValue.data.data.userInformation.messageList}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default AdminPage;
