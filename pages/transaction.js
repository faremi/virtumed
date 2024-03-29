export default function TransactionHistory() {
  return (
    <section className="font-sans">
      <div className="bg-white p-8 rounded-md w-full font-sans">
        <div className=" flex items-center justify-between pb-6">
          <div>
            <h2 className="text-gray-600 font-semibold text-2xl">
              Transaction History
            </h2>
          </div>
        </div>
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <TableHeading />
                <tbody>
                  <TableBodyDebit />

                  <TableBodyCredit />
                  <TableBodyDebit />

                  <TableBodyCredit />
                  <TableBodyDebit />

                  <TableBodyCredit />
                  <TableBodyDebit />

                  <TableBodyCredit />
                  <TableBodyDebit />

                  <TableBodyCredit />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TableHeading() {
  return (
    <thead>
      <tr>
        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Name
        </th>
        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Category
        </th>
        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Created at
        </th>
        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Amount
        </th>
        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Status
        </th>
      </tr>
    </thead>
  );
}

function TableBodyCredit() {
  return (
    <tr className="border-b">
      <td className="px-5 py-5 bg-white text-sm ">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            <img
              className="w-full h-full rounded-full"
              src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">Alonzo Cox</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">Admin</p>
      </td>
      <td className="px-5 py-5 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">Jan 18, 2020</p>
      </td>
      <td className="px-5 py-5 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">70</p>
      </td>
      <td className="px-5 py-5 bg-white text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
          <span
            aria-hidden
            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Credit</span>
        </span>
      </td>
    </tr>
  );
}

function TableBodyDebit() {
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            <img
              className="w-full h-full rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">Vera Carpenter</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">Admin</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">43</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Debit</span>
        </span>
      </td>
    </tr>
  );
}
