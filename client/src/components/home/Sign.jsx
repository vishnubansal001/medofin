import envelop from '../../assets/enevloper.png'

const Sign = () => {
  return (
    <div className="flex relative h-screen overflow-y-hidden">
      <div className=' ml-[8rem] mt-[2rem] bg-transparent absolute z-[9] opacity-[1.7]'>
        <div className="flex bg-black subs items-center justify-center p-[5rem] flex-col m-l-2rem gap-8 w-[75%] m-auto mt-9  rounded-[2rem]">
          <h3 className="text-1xl font-bold text-[#6ecf6b] tracking-widest uppercase">
            Subscribe to our newsletter
          </h3>
          <p className="text-4xl font-bold text-center overflow-hidden text-white self-center">
            Exclusive Offer Previews, Announcements, and More.
          </p>
          <div className="flex items-center justify-evenly w-full">
            <div className="rounded-[1rem] bg-white h-16 font-bold text-gray-700 text-2xl flex items-center justify-center py-4 px-4 w-1/2">
              {/* <FontAwesomeIcon icon={faEnvelope} className="mr-4 bg-transparent" /> */}
              <img src={envelop} className="mr-4 bg-transparent" alt="" />
              <input type="text" id="user-email" className="h-full w-full bg-transparent outline-none placeholder-gray-700 placeholder:font-semibold" placeholder="Your Email" />
            </div>
            <button className="rounded-[1rem] bg-[#5d50c6] border-spacing-1 hover:bg-[#7565ec] text-white text-2xl py-4 px-6">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
