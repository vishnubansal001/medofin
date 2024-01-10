import { ee } from "../../database/data";

const Boxes = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center lg:px-20 py-10 px-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-6">
        {ee.map((item, ind) => (
          <div key={ind} className="justify-center flex flex-col items-center">
            <div className="lg:w-[80%] md:w-[85%] w-full flex flex-col gap-6">
              <img src={item.img} alt="" data-aos="zoom-in-down" />
              <div className="flex flex-col gap-3">
                <h1 className="lg:text-2xl text-xl font-semibold">
                  {item.name}
                </h1>
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boxes;
