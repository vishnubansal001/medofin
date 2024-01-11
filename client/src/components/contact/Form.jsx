const Form = () => {
  return (
    <section className="flex flex-col justify-start items-start select-none h-full pt-[6rem]">
      <div className="flex flex-col justify-center items-center gap-12 py-10 w-full lg:px-20 px-10">
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="md:text-base text-sm font-normal">Contact Us</p>
          <h1 className="lg:text-5xl font-bold md:text-3xl sm:text-xl text-lg">
            Request A Call Back !
          </h1>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:px-10 w-[90%] gap-y-5 gap-x-8">
          <input
            className="border-[#dddddd] border-[1px] w-full px-3 py-2 bg-[#f8f8f8] text-black outline-none placeholder:text-[#37393F]"
            placeholder="YourName"
            type="text"
            name=""
            id=""
          />
          <input
            className="border-[#dddddd] border-[1px] w-full px-3 py-2 bg-[#f8f8f8] text-black outline-none placeholder:text-[#37393F]"
            type="email"
            placeholder="Email Address"
            name=""
            id=""
          />
          <input
            className="border-[#dddddd] border-[1px] w-full px-3 py-2 bg-[#f8f8f8] text-black outline-none placeholder:text-[#37393F]"
            type="number"
            placeholder="Phone Number"
            name=""
            id=""
          />
          <input
            className="border-[#dddddd] border-[1px] w-full px-3 py-2 bg-[#f8f8f8] text-black outline-none placeholder:text-[#37393F]"
            type="text"
            placeholder="Subject"
            name=""
            id=""
          />
          <textarea
            className="border-[#dddddd] border-[1px] w-full px-3 py-2 bg-[#f8f8f8] text-black outline-none placeholder:text-[#37393F] md:col-span-2 col-span-1"
            name=""
            placeholder="Message ..... "
            id=""
            cols="30"
            rows="5"
          ></textarea>

          <div className="flex flex-col justify-center items-center md:col-span-2 col-span-1 mt-4">
            <button className="capitalize text-lg text-[#fff] font-semibold bg-[#35c3b7] hover:bg-[#2a8981] transition-all duration-300 ease-in-out px-10 py-3">
              submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
