const Shop = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center lg:px-20 pb-10 px-10">
      <div className="bg-opacity-50 w-full py-20 flex flex-col justify-center items-center text-center gap-6 rounded-[50px]">
        <h1 className="lg:text-3xl md:text-2xl text-xl font-semibold font-lime">
          Shop.Benefit.Evolve.
        </h1>
        <p
          className="lg:w-[70%] md:w-[85%] w-[90%] md:text-lg text-base"
          data-aos="flip-right"
        >
          Welcome, we bring the pharmacy to your fingertips. Hover over the
          wellness horizons with our quality healthcare every step of the way!
        </p>
        <button className="bg-[#28661E] rounded-full px-8 py-3 text-white transition-all duration-300 ease-in-out hover:bg-[#3f8f32] hover:shadow-lg">
          Shop Medicines
        </button>
      </div>
    </div>
  );
};

export default Shop;
