export default function Portfolio() {
  return (
    <div className="col-span-2  bg-grey-10 md:mb-4 flex align-middle justify-center flex-col ">
      <div className="container bg-gradient-to-r from-purple-500 to-pink-500 h-2/3 md:w-2/3 m-auto rounded-lg drop-shadow p-6">
        <div className="flex flex-row text-white text-xs ">
          <h1>My Portfolio</h1>
        </div>
        <div className="flex flex-row text-white mt-3 text-2xl ">
          <h1>R20,3000</h1>
        </div>
      </div>
      <div className=" absolute  top-1/3 flex flex-row justify-center">
        <div className="m-auto">
        {/* <div className="bg-red-100 h-8 ">
          <p>Amount</p>
        </div>
        <div className="bg-pink-100 h-8 ">
          <p>Amount</p>
        </div> */}
        </div>
      </div>
    </div>
  );
}
