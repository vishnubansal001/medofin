
import bg from "../../assets/bg.png";

// eslint-disable-next-line react/prop-types
const Technologies = ({techno}) => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-center items-center lg:p-20 p-10 relative overflow-x-hidden">
        <div className="w-full flex flex-col gap-10 justify-center items-center">
          {/* eslint-disable-next-line react/prop-types */}
          {techno?.map((item, ind) => (
            <div
              key={ind}
              className={`flex ${
                ind % 2 == 0
                  ? "lg:flex-row flex-col"
                  : "lg:flex-row-reverse flex-col"
              } md:w-[70%] w-[90%] gap-10 justify-center items-center`}
            >
              <div className="lg:w-[50%] flex flex-col gap-4">
                <h1 className="lg:text-3xl font-lime md:text-2xl text-xl font-bold z-[100]">
                  {item.heading}
                </h1>
                <p className="lg:text-xl font-inter font-medium md:text-lg text-base z-[100]">
                  {item.text}
                </p>
              </div>
              <div className="lg:w-[50%] z-[100]">
                <img src={item.img} alt="" />
              </div>
            </div>
          ))}
        </div>
        <div
          className="bg-cover bg-no-repeat bg-center w-[760px] h-[760px] absolute left-[48%]"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
      </div>
    </>
  );
};

export default Technologies;
