import { secs } from "../../database/data";
import fac from "../../assets/fac.png";
import ins from "../../assets/ins.png";
import mess from "../../assets/mess.png";
import twit from "../../assets/twit.png";
import bg from "../../assets/bg.png";

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center lg:px-20 lg:pb-20 pb-10 px-10 relative overflow-hidden">
      <div className="w-full flex flex-col justify-center items-center lg:px-20 lg:pb-20 pb-10 px-10 relative overflow-hidden">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:w-[70%] md:w-[80%] w-[90%]">
          {secs?.map((item, ind) => (
            <div
              key={ind}
              className="flex flex-col justify-center items-center gap-4"
            >
              {item?.map((i, index) => (
                <p className="lg:text-lg text-base" key={index}>
                  {i}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center lg:px-20 lg:pb-20 pb-10 px-10 relative overflow-hidden gap-5">
        <div className="flex flex-row justify-center items-center lg:gap-5 md:gap-3 gap-2">
          <img src={twit} alt="" />
          <img src={ins} alt="" />
          <img src={fac} alt="" />
          <img src={mess} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <p>Copyright © 2023 Medofin.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
      <div
        className="bg-cover bg-no-repeat bg-center w-[760px] h-[760px] absolute left-[48%] -bottom-[50%]"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
    </div>
  );
};

export default Footer;
