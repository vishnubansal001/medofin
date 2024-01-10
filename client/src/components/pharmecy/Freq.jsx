import { freq } from "../../database/data";

const Freq = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center lg:px-20 lg:pb-20 py-10 px-10 relative overflow-hidden">
        <div className="w-full flex flex-col gap-12 justify-center items-center">
          <div className="lg:w-[70%] md:w-[80%] w-[90%] flex items-start justify-start">
            <h1 className="lg:text-5xl font-lime md:text-3xl sm:text-2xl text-xl font-semibold">
              Frequentiy Asked Quesuions
            </h1>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:w-[70%] md:w-[80%] w-[90%] gap-y-16">
            {freq?.map((item, index) => (
              <div key={index} data-aos="flip-right" className="flex flex-col gap-4 w-[90%]">
                <h2 className="lg:text-xl font-Inter text-lg font-semibold">
                  {item.que}
                </h2>
                <p className="lg:text-base font-Inter text-sm">{item.ans}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Freq;
