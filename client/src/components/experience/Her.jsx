import her from "../../assets/her.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-cover bg-center bg-no-repeat font-Inter w-full min-h-[80vh] pt-[6rem] lg:px-20 px-10 flex justify-start items-center"
      style={{ backgroundImage: `url(${her})` }}
    >
      <div className="flex flex-col justify-center items-start gap-10 lg:w-[60%]">
        <div className="flex flex-col justify-center items-start">
          <h1 className="lg:text-6xl font-lime md:text-4xl text-2xl font-semibold">
            Holistic Healthcare
          </h1>
          <h1 className="lg:text-6xl font-lime md:text-4xl text-2xl font-semibold">
            Experience
          </h1>
        </div>
        <button
          onClick={() => navigate("/labs")}
          className="px-16 ml-4 bg-black text-white py-4 lg:text-xl text-lg font-semibold rounded-[20px] italic shadow-md hover:shadow-xl hover:scale-[1.05] transition-all duration-300 ease-in-out"
        >
          Book now
        </button>
      </div>
    </div>
  );
};

export default Hero;
