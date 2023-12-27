import heroBg from "../../assets/heroBg.png";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat w-full min-h-[80vh] pt-[6rem] lg:px-20 px-10 flex justify-start items-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="flex flex-col justify-start items-center gap-10 lg:w-[60%]">
        <h1 className="lg:text-6xl md:text-4xl text-2xl font-semibold italic text-[#131F5C]">
          Providing Best Online Clinic to get Solutions in hand
        </h1>
        <button className="px-16 bg-black text-white py-4 lg:text-xl text-lg font-semibold rounded-[20px] italic shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
          Book now
        </button>
      </div>
    </div>
  );
};

export default Hero;
