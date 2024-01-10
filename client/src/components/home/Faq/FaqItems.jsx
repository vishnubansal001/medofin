import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FaqItems = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer">
      <div
        className=" flex items-center justify-between gap-5"
        onClick={toggleAccordion}
      >
        <h4 className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-black ">
          {item.question}
        </h4>
        <div
          className={`${
            isOpen && "bg-blue-600 text-white border-none"
          }w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141F21] rounded flex items-center justify-center`}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      {isOpen && (
        <p className="text-[14px] lg:text-[18px] leading-6 lg:leading-7 text-black mt-5">
          {item.content}
        </p>
      )}
    </div>
  );
};

export default FaqItems;
