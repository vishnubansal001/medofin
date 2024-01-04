import { blogs } from "../../database/data";

const Blog = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center lg:px-20 lg:py-20 py-10 px-10 gap-10">
      <div className="flex flex-col w-full justify-center items-center text-center">
        <p className="uppercase lg:text-lg text-base">Our Blog</p>
        <p className="font-lime text-[#28661E] lg:text-4xl md:text-3xl text-xl">
          Latest news
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-6">
        {blogs?.map((item, index) => (
          <div
            key={index}
            className={`lg:h-[30rem] lg:flex w-full ${
              index % 2 != 0 ? "items-end" : "items-start"
            }`}
          >
            <div
              style={{ backgroundImage: `url(${item.img})` }}
              className="bg-cover bg-start h-96 p-4 w-full rounded-xl"
            >
              <div className="relative ml-[-25px] bg-[#28661E] rounded-r-full inline-block px-2 text-white lg:text-lg w-auto">
                <p className="inline">{item.date}</p>
              </div>
              <div className="flex flex-col justify-start items-start text-white lg:text-lg">
                <p>{item.text1}</p>
                <p>{item.text2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
