import { beta } from "../../database/data";

const Info = () => {
  return (
    <div className="bg-[#28661E] w-full lg:px-20 px-10 lg:py-20 py-10 flex flex-col justify-center items-center">
      <div className="w-auto px-2 md:px-8 lg:px-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {beta?.map((item, ind) => (
          <div
            key={ind}
            data-aos="flip-right"
            className="bg-cover rounded-[40px] bg-no-repeat h-[400px] flex flex-col justify-end"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="bg-white rounded-[40px] h-1/2 py-8 px-4 flex flex-col justify-between gap-3">
              <h1 className="text-3xl font-bold">{item.name}</h1>
              <p className="text-lg w-[75%] text-[#9095A0]">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
