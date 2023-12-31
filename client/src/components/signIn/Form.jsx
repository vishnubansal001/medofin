import logo from "../../assets/logo.png";
// import axios from "axios";
// import toast from "react-hot-toast";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const Form = () => {
  const [btn, setBtn] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState({
  //   name: '',
  //   email: '',
  //   password: ''
  // })

  // const navigate = useNavigate();

  const onclick = () => {
    setBtn(!btn);
  };



  return (
    <>
      <div className="bg-cover bg-no-repeat  font-mons flex select-none items-center justify-center min-h-screen h-full relative img1">
        <div className="md:w-[60%]"></div>
        <div className="flex items-center md:w-[50%] w-full justify-center">
          <div className="flex flex-col-reverse md:flex-row w-full lg:gap-12 md:gap-10 gap-8">
            <div className="w-full flex flex-col justify-between items-start p-8 h-screen md:rounded-r-[20px] md:rounded-tl-none rounded-t-[20px] lg:gap-10 gap-5">
              <div className="flex items-end w-full justify-end">
                <img src={logo} alt="" className="w-16" />
              </div>
              <div className="flex flex-col justify-center items-center md:items-start gap-5 w-full">
                <div className="flex flex-col justify-center w-[90%] items-start gap-3">
                  <h1 className="font-bold lg:text-4xl text-[#272727] md:text-2xl text-xl">
                    Welcome Back !
                  </h1>
                  <p className="font-normal lg:text-lg md:text-base text-sm text-[#525252] cursor-text">
                    sign in to your account.
                  </p>
                </div>
                <form
                  action="#" method="POST"
                  className="flex flex-col gap-5 md:justify-start md:items-start justify-center items-start md:w-[90%] w-full"
                >
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
                  <div className="flex flex-row justify-between w-full">
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
                    <p className="text-[#28661E] underline">Forgot password?</p>
                  </div>
                </form>
                <button className="md:w-[90%] flex flex-row justify-center items-center gap-1 w-full uppercase text-white font-bold lg:text-lg md:text-base text-sm py-3 bg-[#28661E] rounded-[20px] shadow-md hover:shadow-lg cursor-pointer text-center transition-all duration-300 ease-in-out">
                  sign in{" "}
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
                <p className="flex flex-row gap-2 text-[#525252] lg:text-base text-sm">
                  new user?
                  <button
                    type="submit"
                    // onClick={() => navigate("/sign-up")}
                    className="text-[#28661E] underline"
                  >
                    Sign Up
                  </button>
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
