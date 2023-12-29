import a1 from "../../assets/a1.png";
import a2 from "../../assets/a2.png";
import a3 from "../../assets/a3.png";

const Facilities = () => {
  return (
    <div className="w-full min-h-[80vh] flex flex-col justify-center items-center lg:px-20 lg:pb-20 pb-10 px-10 relative overflow-x-hidden">
      <div className="w-full flex flex-col gap-10 justify-center items-center">
        <h1 className="lg:text-5xl md:text-3xl sm:text-2xl text-xl font-semibold text-[#28661E]">
          Our Facilities
        </h1>
        <div className="flex flex-wrap justify-around gap-4 w-full items-center">
          <img src={a1} alt="" />
          <img src={a2} alt="" />
          <img src={a3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Facilities;
