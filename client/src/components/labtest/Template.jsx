import people from "../../assets/people.png";

const Template = () => {
  return (
    <div className="flex flex-row items-center gap-4 px-5 py-4 bg-[#28661E] text-white rounded-[10px]">
      <img src={people} alt="" />
      <div className="flex flex-col gap-1">
        <h1 className="lg:text-xl md:text-lg text-base font-semibold">Need help with booking your test?</h1>
        <p className="md:text-base text-sm">Upload a Prescription to book a test</p>
      </div>
    </div>
  );
};

export default Template;
