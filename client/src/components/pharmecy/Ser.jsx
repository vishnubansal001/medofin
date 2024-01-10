import { cards } from "../../database/data";

const Ser = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center lg:px-20 py-10 px-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-6">
        {cards.map((card, ind) => (
          <div
            className={`${
              (ind == 0 || ind == 3) && "md:col-span-2"
            } flex flex-col gap-6 rounded-[50px] bg-[#E9E9E9] hover:bg-[#dbd9d9] transition-all ease-in-out duration-300 py-10 px-5`}
            key={ind}
          >
            <div className="flex flex-col gap-3">
              <h1 className="lg:text-4xl font-semibold md:text-2xl text-xl">{card.name}</h1>
              <p className="lg:text-lg text-base">{card.text}</p>
            </div>
            <img src={card.img} alt="" data-aos="zoom-in"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ser;
