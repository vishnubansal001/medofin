import j1 from "../../assets/j1.png";
import j2 from "../../assets/j2.png";
import j3 from "../../assets/j3.png";

const data = [
  {
    img: j1,
    text: "Search for tests and packages and seamlessly book a home sample collection.",
  },
  {
    img: j2,
    text: "We will send a certified professional to your place to assist you with the sample collection",
  },
  {
    img: j3,
    text: "We will email you the reports. You can also access your reports within your account on the Practo app",
  },
];

const How = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 lg:px-20 px-10 lg:pb-20 py-10">
      <h1 className="lg:text-2xl md:text-xl text-lg font-semibold">
        How it works?
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:w-[70%] md:w-[90%] w-auto">
        {data.map((item, ind) => (
          <div key={ind} className="flex flex-row gap-5">
            <img src={item.img} alt="img" className="w-16 h-16" data-aos="flip-left"/>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default How;
