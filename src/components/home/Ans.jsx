import { ques } from "../../database/data";
import bg from "../../assets/bg.png";

const Ans = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center lg:px-20 lg:py-20 py-10 px-10 relative overflow-hidden">
        <div className="w-full flex flex-col gap-12 justify-center items-center">
          <div className="lg:w-[70%] md:w-[80%] w-[90%] flex items-start justify-start">
            <h1 className="lg:text-5xl font-lime md:text-3xl sm:text-2xl text-xl font-semibold">
              Curious? We{"'"}ve got answers!
            </h1>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:w-[70%] md:w-[80%] w-[90%] gap-y-16">
            {ques?.map((item, index) => (
              <div key={index} className="flex flex-col gap-4 w-[90%]">
                <h2 className="lg:text-xl font-Inter text-lg">{item.que}</h2>
                <p className="lg:text-base font-Inter text-sm">{item.ans}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat bg-center w-[550px] h-[550px] absolute bottom-[10%] -left-[7%]"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
      </div>
    </>
  );
};

export default Ans;
