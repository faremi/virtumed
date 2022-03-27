export default function Payment(params) {
  return (
    <section className="font-sans">
      <div className="md:ml-10 grid grid-cols-12 max-w-screen-xl relative mx-auto  pt-20 bg-white p-3">
        <div className="col-span-12 md:col-span-8">
          <div className="">
            <PaymentHeader />
            <section className="form-body mt-20">
              <form action="">
                <div className="input-groupn">
                  <div className="header flex content-center justify-between ">
                    <div className="description">
                      <h2 className="title capitalize text-2xl font-semibold">
                        card number
                      </h2>
                      <p className="text-md font-medium text-gray-300">
                        Enter the 15-digit card number on the card
                      </p>
                    </div>
                    <button className="edit">
                      <span className="btn-desc block ml-8 font-medium text-teal-300">
                        Edit
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4"></div>
      </div>
    </section>
  );
}

function PaymentHeader() {
  return (
    <header className="form-header flex flex-row align-middle justify-between">
      <div className="logo flex justify-between ">
        <span className="m-auto logo circle  h-12  w-12  block bg-teal-700 border rounded-full "></span>
        <h1 className="lean  text-3xl font-light ml-5 text-teal-500 my-auto">
          <span className="text-3xl font-bold ml-5 text-teal-500">Virtu</span>
          Pay
        </h1>
      </div>
      <div className="my-auto text-xl font-medium ml-20 flex justify-center">
        <span className="bg-teal-500 text-center h-12 w-12 rounded-sm -ml-2 inline-flex justify-center align-middle">
          <div className="text-center m-auto text-white">0</div>
        </span>
        <span className="bg-teal-500 h-12 w-12 rounded-sm ml-2 inline-flex justify-center align-middle">
          <div className="text-center m-auto text-white">0</div>
        </span>
        <span className="ml-2 inline-flex justify-center align-middle">
          <div className="text-center m-auto ">:</div>
        </span>
        <span className="bg-teal-500 h-12 w-12 rounded-sm ml-2 inline-flex justify-center align-middle">
          <div className="text-center m-auto text-white">0</div>
        </span>
        <span className="bg-teal-500 h-12 w-12 rounded-sm ml-2 inline-flex justify-center align-middle">
          <div className="text-center m-auto text-white">0</div>
        </span>
      </div>
    </header>
  );
}
