import { Footer, Navbar } from "../../components/home";
import { checkp } from "../../database/data";
import { useParams } from "react-router-dom";

const LabListing = () => {
  const params = useParams();
  const { id } = params;
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:px-20 pb-10 px-10 gap-5 pt-[6rem]">
        <h1 className="lg:text-2xl md:text-xl text-lg font-semibold">
          Popular Labs
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-5 w-full">
          {checkp[id]?.map((item, ind) => (
            <div
              key={ind}
              data-aos="zoom-in-up"
              className="flex flex-col justify-between h-full gap-4 border-2 rounded-[14px] border-gray-200"
            >
              <div className="flex flex-col gap-2">
                <img src={item.img} alt="" className="rounded-[13px]" />
                <div className="px-4">
                  <h1 className="text-lg font-semibold">{item.name}</h1>
                  <p className="text-[#787887] w-[90%] h-14">{item.text}</p>
                  <div className="w-full text-center">
                    <p>{item.t1}</p>
                  </div>
                </div>
              </div>
              <div className="px-4 flex sm:flex-row flex-col justify-between py-4 border-t-2">
                <div className="flex flex-row gap-2 items-center">
                  <p className="lg:text-lg text-bas">{item.price}</p>
                  <p className="lg:text-base text-sm line-through text-[#B4B4BE]">
                    {item.cPrice}
                  </p>
                  <p className="text-[#00A500] lg:text-lg text-base">
                    {item.disc}
                  </p>
                </div>
                <button className="bg-[#28661E] rounded-[14px] md:text-lg font-semibold text-base text-white px-3 py-2">
                  {item.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LabListing;
