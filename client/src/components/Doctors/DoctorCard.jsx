import React from "react";
import star from "../../assets/Star.png";
import { Link } from "react-router-dom";
import arrow from "../../assets/right-arrow.svg";

const DoctorCard = ({ doctor }) => {
  const {
    name,
    specialization,
    avgRating,
    totalRating,
    photo,
    totalPatients,
    hospital,
  } = doctor;
  return (
    <div className="p-3 lg:p-5" data-aos="flip-left">
      <div>
        <img src={photo} className="w-full rounded-lg" alt="" />
      </div>
      <h2 className="text-[18px] leading-[30px] lg:text-[20px] lg:leading-9 text-black font-semibold mt-3 lg:mt-5 ">
        {name}
      </h2>

      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span className="bg-[#CCF0F3] text-blue-500 py-1 px-2 lg:py-2 lg:px-4 text-[12px] leading-4 lg:text-[14px] lg:leading-7  rounded-xl">
          {specialization}
        </span>

        <div className="flex items-center gap-[6px]">
          <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-normal text-black">
            <img src={star} alt="" /> {avgRating}
          </span>

          <span className=" text-[8px] leading-6 lg:text-[14px] lg:leading-7 font-semibold text-black">
            ({totalRating})
          </span>
        </div>
      </div>
      <div className="mt-[18px lg:mt-5 flex items-center justify-between]">
        <div>
          <h3 className="text-[8px] font-medium leading-7 lg:text-[16px] lg:leading-[30px] text-black">
            +{totalPatients} Patients
          </h3>
          <p className="text-[14px] leading-6 font-normal text-black">
            At {hospital}
          </p>
        </div>
        <Link
          to="/doctor"
          className="w-[44px] h-[44px] rounded-full border border-solid mx-auto border-[#181A1E] flex items-center justify-center group  transition-all duration-300 "
        >
          <img
            src={arrow}
            alt=""
            className="hover:p-1 transition-all duration-300 "
          />
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
