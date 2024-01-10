import hee from "../../assets/hee.png";
import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-no-repeat font-Inter w-full min-h-[80vh] pt-[10rem] py-10 lg:px-20 px-10 flex justify-start items-center"
      style={{ backgroundImage: `url(${hee})`, backgroundPosition: "right" }}
    >
      <div className="flex md:flex-row flex-col gap-10">
        <img src={s1} alt="" className="w-96 h-96" />
        <img src={s2} alt="" className="w-96 h-96" />
      </div>
    </div>
  );
};

export default Hero;
