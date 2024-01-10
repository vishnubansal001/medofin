import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import labHero from "../../assets/labshero.svg";
import { Footer, Technologies } from "../../components/home";
import { Labques, labTechno } from "../../database/data";
import bg from "../../assets/bg.png";
const Labs = () => {
  return (
    <>
      <header className="flex items-center justify-center w-full p-2 fixed top-0">
        <nav className="flex items-center justify-center w-full p-2">
          <div className="flex items-center justify-between p-1 w-full">
            <img src={logo} alt="logo" className="w-12 h-12" />
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
      <main className="w-full min-h-[100dvh] h-full flex items-center justify-center flex-col">
        <section className="w-full h-full flex items-center justify-center  bg-[#28661E]">
          <div className="flex items-center justify-center  w-full">
            <div className="flex flex-col items-center justify-center gap-24">
              <div className="flex flex-col items-center justify-center pt-[12rem] gap-24 h-full">
                <h1
                  data-aos="flip-right"
                  className="text-3xl font-lime sm:text-6xl xl:text-9xl font-medium text-white max-w-6xl text-center mx-auto"
                >
                  Medofin
                  <br /> Labs
                </h1>
                <p
                  data-aos="flip-left"
                  className="text-2xl font-semibold font-mons text-white max-w-3xl text-center mx-auto"
                >
                  A new era of health care powered by Medofin. We combine
                  state-of-the-art lab facilities with an intuitive online
                  interface to deliver fast, accurate and hassle-free testing.
                </p>
              </div>
              <div
                className="flex items-center justify-center w-full h-full"
                data-aos="zoom-in"
              >
                <img src={labHero} alt="labHero" className="w-full h-full" />
              </div>
            </div>
          </div>
        </section>
        <Technologies techno={labTechno} />
        <section className="flex items-center justify-center py-4 flex-col">
          <div className="w-full flex flex-col justify-center items-center lg:px-20 lg:pb-20 pb-10 px-10 relative overflow-hidden">
            <div className="w-full flex flex-col gap-12 justify-center items-center">
              <div
                data-aos="zoom-in-up"
                className="lg:w-[70%] md:w-[80%] w-[90%] flex items-start justify-start"
              >
                <h1 className="lg:text-5xl font-lime md:text-3xl sm:text-2xl text-xl font-semibold">
                  Why Medofin?
                </h1>
              </div>
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:w-[70%] md:w-[80%] w-[90%] gap-16">
                {Labques?.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-3 w-[90%]"
                    data-aos="zoom-in-down"
                  >
                    <h2 className="lg:text-xl font-bold font-Inter text-lg">
                      {item.que}
                    </h2>
                    <p className="lg:text-base font-dmSans text-sm">
                      {item.ans}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat bg-center w-[550px] h-[550px] absolute bottom-[10%] -left-[7%]"
              style={{ backgroundImage: `url(${bg})` }}
            ></div>
          </div>
          <div className="w-full flex items-center justify-center py-12">
            <div className="max-w-2xl flex items-center justify-center w-full flex-col gap-4">
              <div className="flex-col items-center justify-center flex gap-3">
                <h1 className="lg:text-5xl font-lime md:text-3xl sm:text-2xl text-xl font-semibold">
                  Let&apos;s Start
                </h1>
                <p className="text-center font-Inter">
                  Wy wait on your wellbeing? Start your health journey with
                  Medofine
                </p>
              </div>
              <div className="flex items-center justify-center gap-3 font-Inter w-full">
                <button className="bg-[#28661E] text-white px-4 py-2 rounded-md">
                  Schedule a Test
                </button>
                <button className="bg-[#D9D9D9] text-black px-4 py-2 rounded-md">
                  Find a Lab
                </button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Labs;
