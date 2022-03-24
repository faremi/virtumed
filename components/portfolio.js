import { DocumentReportIcon, CashIcon } from "@heroicons/react/solid";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="col-span-2 font-sans row-end-1 bg-grey-10 xl:mb-4 flex align-middle justify-center flex-col h-64 md:h-80 xl:mt-20">
      <div className="container bg-gradient-to-r from-teal-500 to-cyan-500 h-2/3 xl:w-5/6 m-auto rounded-lg drop-shadow p-6 flex justify-center">
        <div className="absolute text-white text-xs justify-self-start left-0 mx-5 ">
          <h1>My Portfolio</h1>
        </div>
        <div className="absolute text-white mt-8 text-3xl left-0 mx-5 ">
          <h1>R20,3000</h1>
        </div>
        <div className=" m-auto absolute  -bottom-1/4 h-12  mb-7">
          <div className="flex flex-row h-full w-full">
            <PortfolioButton1 />
            <PortfolioButton2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function PortfolioButton1() {
  return (
    <Link href="/">
      <a>
        <div className=" flex justify-center h-full bg-white w-32  md:w-40 mr-2 md:mr-5 rounded-lg drop-shadow">
          <CashIcon className="m-auto h-5 w-5 text-grey-500 mx-2" />
          <h1 className="my-auto text-xs text-gray-500">Deposit</h1>
        </div>
      </a>
    </Link>
  );
}

function PortfolioButton2() {
  return (
    <Link href="/transaction">
      <a>
        <div className="flex justify-center h-full bg-white w-32 md:w-40 max-w-xs ml-2 md:ml-5 rounded-lg drop-shadow-sm">
          <DocumentReportIcon className="m-auto h-5 w-5 text-grey-500 mx-2" />
          <h1 className="my-auto text-xs text-gray-500 ">
            Transaction History
          </h1>
        </div>
      </a>
    </Link>
  );
}
