import heroImg from "../../assets/hero-img01.png";
import heroImg2 from "../../assets/hero-img02.png";
import heroImg3 from "../../assets/hero-img03.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* ========== Hero Section ========= */}
      <>
        <section className=" pt-[90px] py-16 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[50px] items-center justify-between">
              {/* ======Hero Content===== */}
              <div>
                <div className="lg:w-[500px]" data-aos="flip-right">
                  <h1 className="text-[30px] leading-[46px] text-[#181A1E] font-[800] md:text-[50px] md:leading-[60px]">
                    Providing Best Online Clinic to get Solutions in hand.
                  </h1>
                  <p className="text-[18px] leading-[30px] font-[400] text-[#4E545F] mt-[18px]">
                    Meet Medofin! We’re here to revolutionize healthcare and
                    bring your clinic experience online. Forget the long waiting
                    lines and inconvenient visits. Your solutions are now just a
                    few clicks away.
                  </p>

                  <button
                    onClick={() => navigate("/exp")}
                    className="bg-[black] py-[15px] px-[35px] rounded-[50px] text-white font-[600] mt-[38px] hover:shadow-xl shadow-lg hover:scale-[1.05] transition-all duration-300 ease-in-out"
                  >
                    Request an Appointment
                  </button>
                </div>
                {/* ===== Hero Counter ==== */}
                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  <div>
                    <h2 className="text-[20px] leading-[56px] lg:text-[44px] lg:leading:-[54px] font-[500] text-[#181A1E]">
                      30+
                    </h2>
                    <span className="w-[100px] h-2 bg-yellow-400 rounded-full block mt-[-14px]"></span>
                    <p className="text-[18px] leading-[30px] font-[400] text-[#4E545F] mt-[18px]">
                      Years of Experience
                    </p>
                  </div>
                  <div>
                    <h2 className="text-[30px] leading-[56px] lg:text-[44px] lg:leading:-[54px] font-[500] text-[#181A1E]">
                      12+
                    </h2>
                    <span className="w-[100px] h-2 bg-purple-500 rounded-full block mt-[-14px]"></span>
                    <p className="text-[18px] leading-[30px] font-[400] text-[#4E545F] mt-[18px]">
                      Clinic Location
                    </p>
                  </div>
                  <div>
                    <h2 className="text-[30px] leading-[56px] lg:text-[44px] lg:leading:-[54px] font-[500] text-[#181A1E]">
                      100%
                    </h2>
                    <span className="w-[100px] h-2 bg-[#7b8cfd] rounded-full block mt-[-14px]"></span>
                    <p className="text-[18px] leading-[30px] font-[400] text-[#4E545F] mt-[18px]">
                      Customer Satisfaction
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-[30px] justify-end" data-aos="zoom-in">
                <div>
                  <img className="w-full" src={heroImg} alt="" />
                </div>
                <div className="mt-[30px]">
                  <img src={heroImg2} alt="" className="w-full mb-[30px]" />
                  <img src={heroImg3} alt="" className="w-full " />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Hero;
