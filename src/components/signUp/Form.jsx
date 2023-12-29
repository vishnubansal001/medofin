import logo from "../../assets/logo.png";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

const Form = () => {
  const [btn, setBtn] = useState(false);

  const navigate = useNavigate();

  const onclick = () => {
    setBtn(!btn);
  };
  return (
    <>
      <div className="bg-cover bg-no-repeat flex select-none font-mons items-center justify-center min-h-screen h-full relative img">
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col-reverse md:flex-row w-full lg:gap-12 md:gap-10 gap-8">
            <div className="md:w-[45%] w-full flex flex-col justify-between items-start p-8 h-screen md:rounded-r-[20px] md:rounded-tl-none rounded-t-[20px] lg:gap-10 gap-5">
              <div>
                <img src={logo} alt="" className="w-16" />
              </div>
              <div className="flex flex-col justify-center items-center md:items-start gap-5 w-full">
                <div className="flex flex-col justify-center w-[90%] items-start gap-3">
                  <h1 className="font-bold lg:text-4xl text-[#272727] md:text-2xl text-xl">
                    join Us !
                  </h1>
                  <p className="font-normal lg:text-lg md:text-base text-sm text-[#525252] cursor-text">
                    experience the joy of holistic heathcare.
                  </p>
                </div>
                <form
                  action=""
                  className="flex flex-col gap-5 md:justify-start md:items-start justify-center items-start md:w-[90%] w-full"
                >
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="name"
                    className="outline-none border-2 border-[#8D8D8D] shadow-md focus:shadow-xl transition-all duration-300 ease-in-out rounded-[12px] p-3 w-[90%]"
                  />
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="email"
                    className="outline-none border-2 border-[#8D8D8D] shadow-md focus:shadow-xl transition-all duration-300 ease-in-out rounded-[12px] p-3 w-[90%]"
                  />
                  <input
                    type="password"
                    name=""
                    id=""
                    placeholder="password"
                    className="outline-none border-2 border-[#8D8D8D] shadow-md focus:shadow-xl transition-all duration-300 ease-in-out rounded-[12px] p-3 w-[90%]"
                  />
                  <div className="flex flex-row items-center justify-start gap-2">
                    <input
                      type="checkbox"
                      name="check"
                      id="check"
                      checked={btn}
                      className={`mt-1 rounded-md text-[#8D8D8D] border-[#8D8D8D]`}
                    />
                    <label
                      htmlFor="#check"
                      className="lg:text-lg md:text-base text-[#8D8D8D]"
                      onClick={onclick}
                    >
                      remember me
                    </label>
                  </div>
                  <button className="md:w-[90%] flex flex-row justify-center items-center gap-1 w-full uppercase text-white font-bold lg:text-lg md:text-base text-sm py-3 bg-[#28661E] rounded-[20px] shadow-md hover:shadow-lg cursor-pointer text-center transition-all duration-300 ease-in-out">
                  sign up{" "}
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.45831 9.5H15.5416"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 3.95834L15.5417 9.50001L10 15.0417"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                </form>
                
                <p className="flex flex-row gap-2 text-[#525252] lg:text-base text-sm">
                  already have an account?
                  <span onClick={() => navigate('/sign-in')} className="text-[#28661E] underline">
                    Sign In
                  </span>
                </p>
              </div>
              <div className="text-center w-full">
                <p className="md:text-base text-sm text-[#525252]">
                  &copy; MEDOFIN
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
