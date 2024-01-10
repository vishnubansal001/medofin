import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { CiShoppingCart } from "react-icons/ci";
import Hero from "../../components/labtest/Hero";
import Template from "../../components/labtest/Template";
import Diagnostic from "../../components/labtest/Diagnostic";
import Health from "../../components/labtest/Health";
import CheckUp from "../../components/labtest/CheckUp";
import { Footer } from "../../components/home";
import Benefits from "../../components/labtest/Benefits";
import How from "../../components/labtest/How";

const LabTest = () => {
  return (
    <>
      <header className="flex items-center justify-center w-full z-10 fixed top-0 bg-[#28661E] h-[4.5rem] backdrop-blur-sm bg-clip">
        <nav className="flex items-center justify-center w-full flex-col gap-2">
          <div className="flex items-center justify-between px-6 py-3 border-[#dfdfdf] border-b w-full">
            <div className="flex items-center justify-center gap-2">
              <img src={logo} alt="logo" className="w-12 h-12" />
              <p className="font-lime sm:flex hidden text-2xl text-white">
                Medofin
              </p>
            </div>
            <NavLink className="text-xs s:text-sm sm:text-base font-normal font-popp text-white">
              Home
            </NavLink>
            <NavLink className="text-xs s:text-sm sm:text-base font-normal font-popp text-white">
              LabTest
            </NavLink>
            <NavLink className="text-xs s:text-sm sm:text-base font-normal font-popp text-white">
              Sample Collection
            </NavLink>
          </div>
        </nav>
      </header>
      <div className="flex fixed z-10 mt-[4.5rem] items-center justify-between px-12 py-2 md:flex-row flex-col w-full bg-white bg-opacity-50 gap-2">
        <div className="flex md:flex-row flex-col gap-3 rounded-lg md:w-[85%] w-full">
          <div className="relative w-full md:w-[30rem] border">
            <input
              type="text"
              placeholder="Search for Place"
              className="py-2 pl-10 pr-4 w-full rounded-md focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-500" />
            </div>
          </div>
          <div className="relative w-full md:w-[30rem] border">
            <input
              type="text"
              placeholder="Search for tests, packages and profiles"
              className="py-2 pl-10 pr-4 w-full rounded-md focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-500" />
            </div>
          </div>
        </div>
        <button className="bg-white text-black px-5 py-2 flex flex-row gap-2 justify-center items-center border-2 rounded-md">
          <CiShoppingCart /> Cart
        </button>
      </div>
      <Hero />
      <Template />
      <Diagnostic />
      <Health />
      <CheckUp />
      <Benefits />
      <How />
      <Footer />
    </>
  );
};

export default LabTest;
