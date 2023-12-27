const Sign = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center lg:px-20 lg:pb-20 pb-10 px-10 relative overflow-x-hidden">
      <div className="w-full flex flex-col gap-10 justify-center items-center">
        <div className="flex flex-col justify-center items-center text-center lg:w-[50%] w-full">
          <h1 className="lg:text-5xl md:text-3xl sm:text-2xl text-xl font-semibold">
            Sign up and stay informed{" "}
          </h1>
          <h1 className="lg:text-5xl md:text-3xl sm:text-2xl text-xl font-semibold">
            about our newest services and offers.
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <input
            type="email"
            placeholder="name@email.com"
            className="bg-[#D9D9D9] py-2 w-full px-5 rounded-[10px] outline-none border-none"
          />
          <button className="w-full bg-[#28661E] py-2 text-white lg:text-lg rounded-[10px]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sign;
