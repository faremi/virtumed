export default function BookAppointment({ handle }) {
  return (
    <div className="flex font-sans items-center justify-center bg-white my-12">
      <card className="w-80 rounded-2xl border shadow py-12 px-8 hover:-translate-y-1 hover:shadow-2xl delay-75 duration-100">
        <p className="text-3xl text-gray-700 font-semibold"> Premium </p>
        <p className="text-xl text-gray-700 font-semibold mt-1"> 200 </p>
        <p className="text-sm text-gray-700 font-semibold mt-1">
          RAND per appointment
        </p>

        <p className="text-sm text-gray-700 font-light mt-5 leading-7">
          Virtumed Special Appoint plan support patient with aid of booking an
          appoint with medical profession.
        </p>

        <button
          onClick={handle}
          className="mt-10 w-full py-3 rounded-xl border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-gray-50"
        >
          Consult Now
        </button>
      </card>
    </div>
  );
}
