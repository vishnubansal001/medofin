import bgg from "../../assets/bgg.png";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat font-Inter w-full min-h-[80vh] pt-[6rem] flex flex-col items-center relative"
      style={{ backgroundImage: `url(${bgg})` }}
    >
      <div className="flex flex-col justify-center items-center w-full gap-10 min-h-[40vh]">
        <h1
          className="font-lime lg:text-7xl md:text-6xl text-4xl text-[#28661E]"
          data-aos="flip-right"
        >
          Medofin Pharmacy
        </h1>
      </div>
      <div className="bg-[#A2E996] bg-opacity-50 w-full lg:px-20 px-10 py-20 flex flex-col justify-center items-center text-center gap-6 rounded-[50px]">
        <h1 className="lg:text-3xl md:text-2xl text-xl font-semibold font-lime">
          Order Now!
        </h1>
        <p
          className="lg:w-[70%] md:w-[85%] w-[90%] md:text-lg text-base"
          data-aos="flip-left"
        >
          Experience the ease of accessing quality healthcare and medications
          without the need to navigate through aisles. Medofin brings the
          convenience of top-notch healthcare directly to your doorstep.
        </p>
        <button className="bg-[#28661E] rounded-full px-8 py-3 text-white transition-all duration-300 ease-in-out hover:bg-[#3f8f32]">
          Start Scrolling
        </button>
      </div>
    </div>
  );
};

export default Hero;
