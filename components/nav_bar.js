import React, { useState } from "react";
import { Transition, Menu } from "@headlessui/react";
// import { Link } from "react-scroll";
import Image from "next/image";
import Logo from "../public/logo.png";
import Link from "next/link";
import DoctorDropDown from "./doctordropdown";
import PatientDropDown from "./patientdropdown";
function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDoctorOpen, setIsDoctorOpen] = useState(false);

  return (
    <div className="">
      <nav className="shadow-sm fixed w-full z-10 ">
        <div className="w-full">
          <div className="flex items-center h-20 w-full ">
            <div className="flex items-center justify-between w-full">
              <div className=" xl:ml-40 flex justify-center items-center flex-shrink-0 ">
                {/* <h1 className=" font-bold text-xl cursor-pointer">
                  Stream<span className="text-teal-500">line</span>
                </h1> */}
                <Image
                  //   loader={myLoader}
                  src={Logo}
                  alt="Picture of the author"
                  width={150}
                  height={50}
                />
              </div>
              <div className="hidden md:block mr-20 lg:mr-40 mx-20">
                <div className="ml-10 flex items-baseline space-x-5">
                  <Link
                    href="/"
                    activeClass="Home"
                    to="about"
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <a className="cursor-pointer text-teal-600 font-semibold px-3 py-2 text-md hover:font-black">
                      Home
                    </a>
                  </Link>
                  <Link
                    href="/about"
                    activeClass="about"
                    to="about"
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <a className="cursor-pointer hover:bg-teal-600 text-black hover:text-white px-3 py-2 rounded-md text-md font-semi">
                      About
                    </a>
                  </Link>

                  <PatientDropDown />
                  <DoctorDropDown />

                  <Link
                    href="/admin"
                    activeClass="contact"
                    to="contact"
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <a className="cursor-pointer bg-teal-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black">
                      Contact
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-teal-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <Link
                  href="/"
                  activeClass="home"
                  to="home"
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <a className="cursor-pointer hover:bg-teal-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Home
                  </a>
                </Link>
                <Link
                  href="/about"
                  activeClass="about"
                  to="about"
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <a className="cursor-pointer hover:bg-teal-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    About
                  </a>
                </Link>

                {/* <Link
                  href="/patient"
                  activeClass="patient"
                  to="patient"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-teal-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  <a className="cursor-pointer hover:bg-teal-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Patient
                  </a>
                </Link> */}
                <PatientDropDown />

                <DoctorDropDown />

                {/* <Link
                  href="/doctor"
                  activeClass="doctor"
                  to="doctor"
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <a className="cursor-pointer hover:bg-teal-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Doctor
                  </a>
                </Link> */}

                <Link
                  href="/contact"
                  activeClass="Patient"
                  to="Patient"
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <a className="cursor-pointer hover:bg-teal-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
