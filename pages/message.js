import {
  gql,
  useMutation,
  useQuery,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

import { useState } from "react";
import { useRouter } from "next/router";
import apolloClient from "../lib/apollo";
import Cookies from "cookies";

const REGISTRATION = gql`
  query Messages($patientId: String!, $userId: String!) {
    messages(patientId: $patientId, userId: $userId) {
      id
      content
      userId
      accountType
    }
  }
`;

const MESSAGEMUT = gql`
  mutation Messages(
    $patientId: String!
    $userId: String!
    $messages: String!
    $accountType: String!
  ) {
    messages(
      patientId: $patientId
      userId: $userId
      messages: $messages
      accountType: $accountType
    )
  }
`;
export async function getServerSideProps({ res, req }) {
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const baseUrl = req ? `${protocol}://${req.headers.host}` : "";

  const apolloClients = new ApolloClient({
    uri: baseUrl + "/api/graphql", //process.env.LOCALHOST,
    cache: new InMemoryCache(),
  });
  const cookies = new Cookies(req, res);
  let valuess = cookies.get("myCookieName");
  let accountType = cookies.get("account");
  let account2 = cookies.get("account2");
  let pateint;
  let user;
  if (accountType == "DOCTOR") {
    pateint = valuess;
    user = account2;
  } else {
    user = valuess;
    pateint = account2;
  }
  console.log(account2);
  const data = await apolloClients.query({
    query: REGISTRATION,
    variables: {
      patientId: "62456fd1c8a8b3a8fc8a09e4",
      userId: "624576397e3d0e5fe7dbab09",
    },
  });

  return {
    props: {
      data,
      valuess,
      accountType,
      user,
      pateint,
    }, // will be passed to the page component as props
  };
}

export default function ChatBox(props) {
  const [userMessage, setUserMessage] = useState("");
  const router = useRouter();
  const handleEmail = (a) => {
    setUserMessage(a.target.value);
  };
  function handleLogin(a) {
    console.log("Welcome");
    if (!(userMessage === ""))
      return apolloClient
        .mutate({
          mutation: MESSAGEMUT,
          variables: {
            patientId: "62456fd1c8a8b3a8fc8a09e4",
            userId: "624576397e3d0e5fe7dbab09",
            // patientId: props.pateint,
            // userId: props.user,
            messages: userMessage,
            accountType: props.accountType,
          },
        })

        .then((result) => {
          console.log(result);
          router.reload(window.location.pathname);
        })
        .catch((e) => console.log(e));
  }

  return (
    <section className=" flex justify-center align-middle my-16">
      <div className="lg:w-1/2"></div>
      <div className="mx-auto container">
        <div className="max-w-3xl border rounded">
          <div>
            <div className="w-full">
              <div className="relative flex items-center p-3 border-b border-gray-300">
                <img
                  className="object-cover w-10 h-10 rounded-full"
                  src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
                  alt="username"
                />
                <span className="block ml-2 font-bold text-gray-600">Emma</span>
                <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3"></span>
              </div>
              <div className="relative w-full p-6 overflow-y-auto h-[40rem]">
                <ul className="space-y-2">
                  {props.data.data.messages.map((message) => {
                    if (
                      message.userId === props.valuess &&
                      message.accountType === props.accountType
                    ) {
                      return (
                        <li className="flex justify-start">
                          <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                            <span className="block">{message.content}</span>
                          </div>
                        </li>
                      );
                    } else {
                      return (
                        <li className="flex justify-end">
                          <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                            <span className="block">{message.content}</span>
                          </div>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>

              <div className="flex items-center justify-between w-full p-3 border-t border-gray-300">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    />
                  </svg>
                </button>

                <input
                  onChange={handleEmail}
                  type="text"
                  placeholder="Message"
                  className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                  name="message"
                  required
                />
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                </button>
                <button onClick={handleLogin} type="submit">
                  <svg
                    className="w-5 h-5 text-gray-500 origin-center transform rotate-90"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
