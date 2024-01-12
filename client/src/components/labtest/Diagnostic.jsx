import { disgnostic } from "../../database/data";

const Diagnostic = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-5 lg:px-20 px-10 lg:py-20 py-10">
      <h1 className="lg:text-2xl md:text-xl text-lg font-semibold">
        Top Booked Diagnostic Tests
      </h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 w-full">
        {disgnostic?.map((item, ind) => (
          <div
            key={ind}
            data-aos="flip-right"
            className="border-[1px] border-[#F0F0F5] items-start flex flex-col justify-start pt-2 gap-4"
          >
            <h1 className="px-3 text-lg font-semibold">{item.name}</h1>
            <div className="px-3 w-full min-h-12 flex flex-col justify-center">
              <p>{item.t1}</p>
              {item.t2 && <p>{item.t2}</p>}
            </div>
            <div className="w-full flex flex-col justify-start gap-3">
              <div className="w-full text-center">
                <p>{item.head}</p>
              </div>
              <p className="px-3 text-lg font-semibold">{item.price}</p>
              <button className=" border-[1px] w-[70%] mx-auto lg:text-lg text-base text-[#28661E] font-semibold border-[#F0F0F5]">
                {item.btn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diagnostic;
