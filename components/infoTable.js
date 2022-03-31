import Link from "next/link";
import cookieCutter from "cookie-cutter";
import { useRouter } from "next/router";

export default function InfoTable({ params }) {
  console.log(params);
  let value = [
    {
      type: "DOCTOR",
    },
  ];
  if (params.lenght > 1) {
    value = params;
  }
  return (
    <div className="flex flex-col font-sans">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Type
                  </th>

                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Email
                  </th>

                  {value[0].type != "PATIENT" ? (
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Speciality
                    </th>
                  ) : (
                    ""
                  )}
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {params.map(function (d, idx) {
                  return <TableRowItem key={d} prop={d} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableRowItem({ prop }) {
  const router = useRouter();

  function oncliks(a) {
    a.preventDefault();
    console.log("ajdhhffjfj");
    router.push("/message");
    cookieCutter.set("account", prop.type);
    return cookieCutter.set("account2", prop.other);
  }
  return (
    <tr className="bg-white border-b">
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {prop.type}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {prop.type != "PATIENT" ? prop.otherEmail : prop.userEmail}
      </td>

      {prop.type != "PATIENT" ? (
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {prop.speciality}
        </td>
      ) : (
        ""
      )}
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <button onClick={oncliks}>
          <a>
            <div className=" text-red-500">Chat With</div>
          </a>
        </button>
      </td>
    </tr>
  );
}
